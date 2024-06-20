import React, {
  useCallback,
  useLayoutEffect,
  useState,
  useEffect,
} from "react";
import ReactFlow, {
  Background,
  Controls,
  EdgeTypes,
  Position,
  useEdgesState,
  useNodesState,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import ELK from "elkjs/lib/elk.bundled.js";
import { IoMdArrowRoundBack } from "react-icons/io";
import ButtonComponent from "../../components/common-components/button-component";
import Addpanal from "../../components/automation/addpanal";
import Profileview from "../../components/automation/profile-view";
import Wait from "../../components/automation/wait";
import InitialAddNode from "../../components/automation/initialAddNode";
import CustomEdge from "../../components/reactflowComponents/customEdgeLabelRenderer";
import NewAddNode from "../../components/automation/newAddNode";

interface AutomationFormProps {
  setPageViewFun: (value: any) => void;
  editData: any;
  isEditMode: boolean;
}

const nodeTypes = {
  InitialAddNode,
  NewAddNode,
  ProfileView: Profileview,
  Wait,
};

const edgeTypes: EdgeTypes = {
  custom: CustomEdge,
};

const elkOptions = {
  "elk.algorithm": "layered",
  "elk.layered.spacing.nodeNodeBetweenLayers": "100",
  "elk.spacing.nodeNode": "80",
};

const getLayoutedElements = async (
  nodes: any[],
  edges: any[],
  options: any = {}
) => {
  const elk = new ELK();
  const isHorizontal = options?.["elk.direction"] === "BOTTOM";
  const graph = {
    id: "root",
    layoutOptions: options,
    children: nodes.map((node) => ({
      ...node,
      targetPosition: isHorizontal ? "left" : "top",
      sourcePosition: isHorizontal ? "right" : "bottom",
    })),
    edges: edges,
  };

  const layoutedGraph: any = await elk.layout(graph);
  return {
    nodes: layoutedGraph.children.map((node: any) => ({
      ...node,
      position: { x: node.x, y: node.y },
    })),
    edges: layoutedGraph.edges,
  };
};

const AutomationForm: React.FC<AutomationFormProps> = ({
  setPageViewFun,
  isEditMode,
  editData,
}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [openAddStep, setOpenAddStep] = useState(false);
  console.log(nodes);
  console.log(edges);
  const onchangeDefault = (id: string | number, attr: string, value: any) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id !== id) {
          return node;
        }
        return {
          ...node,
          data: {
            ...node.data,
            [attr]: value,
          },
        };
      })
    );
  };

  const initialAddNode = {
    id: "1",
    data: {
      handleClick: () => {
        setOpenAddStep(true);
      },
    },
    position: { x: 0, y: 0 },
    type: "InitialAddNode",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  };

  const newAddNode = {
    id: "2",
    data: {
      handleClick: () => {
        setOpenAddStep(true);
      },
    },
    position: { x: 0, y: 0 },
    type: "NewAddNode",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  };

  const ProfileViewNode = {
    id: "1",
    data: {},
    position: { x: 0, y: 0 },
    type: "ProfileView",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    width: 150,
    height: 50,
  };

  const WaitNode = {
    id: "3",
    data: {
      unit: "",
      value: "",
      onchange: onchangeDefault,
    },
    position: { x: 0, y: 0 },
    type: "Wait",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    width: 150,
    height: 100,
  };

  const connectionRequestNode = {
    id: "4",
    data: {
      name: "sanjay",
      color: "red",
      onchange: onchangeDefault,
    },
    position: { x: 5, y: 600 },
    type: "Wait",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  };

  const onclickAddStep = (data: any) => {
    setOpenAddStep(true);
  };

  useEffect(() => {
    const loadInitialNodesAndEdges = async () => {
      const initialNodes = [initialAddNode];
      const initialEdges: any[] = [
        // {
        //   id: '1-2',
        //   source: '1',
        //   target: '2',
        //   data: {
        //     onclick: onclickAddStep,
        //   },
        //   type: 'custom',
        //   // animated: true,
        // },
        // {
        //   id: '2-3',
        //   source: '2',
        //   target: '3',
        //   data: {},
        //   type: 'custom',
        //   animated: true,
        // },
      ];

      const { nodes: layoutedNodes, edges: layoutedEdges } =
        await getLayoutedElements(initialNodes, initialEdges, elkOptions);

      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    };

    loadInitialNodesAndEdges();
  }, []);

  const stepClicked = (step: string) => {
    let isInitialMode = false;
    if (nodes.length === 1 && nodes[0].type === "InitialAddNode") {
      isInitialMode = true;
    }
    switch (step) {
      case "Connection Request":
        // Handle Connection Request
        break;
      case "InMail Request":
        // Handle InMail Request
        break;
      case "Email":
        // Handle Email
        break;
      case "Message":
        // Handle Message
        break;
      case "Profile View":
        // Handle Profile View

        const newNodes = isInitialMode
          ? [
              { ...ProfileViewNode, id: "1" },
              { ...newAddNode, id: "2" },
            ]
          : [
              ...nodes,
              { ...ProfileViewNode, id: (nodes.length + 1).toString() },
            ];

        const newEdges = isInitialMode
          ? [
              {
                id: "1-2",
                source: "1",
                target: "2",
                data: {
                  onclick: onclickAddStep,
                },
                type: "custom",
              },
            ]
          : edges;

        getLayoutedElements(newNodes, newEdges, elkOptions).then(
          ({ nodes: layoutedNodes, edges: layoutedEdges }) => {
            setNodes(layoutedNodes);
            setEdges(layoutedEdges);
          }
        );
        break;
      case "Endorse Profile":
        // Handle Endorse Profile
        break;
      case "Like Content":
        // Handle Like Content
        break;
      case "Share Content":
        // Handle Share Content
        break;
      case "Revoke Connection Request":
        // Handle Revoke Connection Request
        break;
      case "Wait":
        // Handle Wait
        break;
      case "Download Profile":
        // Handle Download Profile
        break;
      case "Invite To Follow Company":
        // Handle Invite To Follow Company
        break;
      case "Enrich Profile":
        // Handle Enrich Profile
        break;
      case "Update To Connected":
        // Handle Update To Connected
        break;
      default:
        // Handle default case
        break;
    }
    setOpenAddStep(false);
  };

  return (
    <div className="automation-reactflow">
      <div className="automation-reactflow-header">
        <div className="reactflow-header-child">
          <div>
            <IoMdArrowRoundBack
              style={{
                padding: "5px",
                border: "1px solid #2E3944",
                cursor: "pointer",
                borderRadius: "3px",
              }}
            />
          </div>
          <div style={{ verticalAlign: "middle" }}> {"Automation Name"}</div>
        </div>
        <div>
          <ButtonComponent
            title={"Save"}
            height="35px"
            width="100px"
            // disabled={(showMessage && showType === "success") ? true : false}
            backgroundColor="#124E66"
            color="white"
            className={
              false
                ? "button-component-hover disabled"
                : "button-component common-btn"
            }
            handleClick={() => {
              // handleLayTimeApprovalSave("Approved")
            }}
          />
        </div>
      </div>
      <div className="wrapper-reactflow">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          onEdgesChange={onEdgesChange}
          onNodesChange={onNodesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
        >
          <Background color="black" />
          <Controls />
          {/* <MiniMap /> */}
          {openAddStep && (
            <Addpanal
              hideModal={() => {
                setOpenAddStep(false);
              }}
              stepClicked={stepClicked}
            />
          )}
        </ReactFlow>
      </div>
    </div>
  );
};

const AutomationFormWrapper: React.FC<AutomationFormProps> = (props) => (
  <ReactFlowProvider>
    <AutomationForm {...props} />
  </ReactFlowProvider>
);

export default AutomationFormWrapper;
