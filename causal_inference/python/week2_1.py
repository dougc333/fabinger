
import networkx as nx
import matplotlib.pyplot as plt
from graph import Graph


class FowardPath:
    def __init__(self, graph):
        self.graph = graph

    def findFowardPaths(self):
        # return list of all foward paths
        return None


class FindChain:
    def __init__(self, graph):
        self.graph = graph

    def findChain(self):
        # iterate through all nodes
        return None


class JointDistribution:
    def __init__(self, graph):
        self.graph = graph

    def findJointDist(self):
        return None


class FindFork:
    def __init__(self, graph):
        self.graph = graph

    def findFork(self):
        return None


class FindInvertedFork:
    def __init__(self, graph):
        self.graph = graph

    def findInvertedFork(self):
        # return list of nodes IF
        return None


class FindCollider:
    def __init__(self, graph):
        self.graph = graph
        self.findCollider()

    def findCollider(self):
        # node has to have None outgoiong edges and more than 1 incoming edge
        incoming = {}
        print(self.graph.nodes)
        # how to tell difference between collider and end node?
        # no None edges and only incoming edges to node
        for node in self.graph.nodes:
            print("processing:", node, "edges:", self.graph.nodes[node])
            # process edges per node
            if self.graph.nodes[node] != None:
                for edge in self.graph.nodes[node]:
                    print("edge:", edge)
                    # add 1 to incoming
                    if edge not in incoming:
                        incoming[edge] = 1
        print("incoming:", incoming)
        # need min 2 incoming and no outgoing edges for node.
        # are edge nodes with 2 incoming edges colliders?


class Simple_Forward_graph:
    def __init__(self):
        self.nodes = ["A", "Y"]
        self.edges = [("A", "Y")]

    def draw(self):
        nx.draw(self.graph, with_labels=True, font_weight='bold')
        plt.show()


class Basic_Confounder_graph:
    def __init__(self):
        self.nodes = {"A": ["Y"], "B": ["A", "Y"], "Y": None}


class Basic_Collider_graph:
    def __init__(self):
        self.nodes = {"A": ["B"], "B": None, "Y": ["B"]}
        self.graph = nx.DiGraph()
        self.graph.add_nodes_from(self.nodes.keys)

# made into fork. forgot what this graph really was


class week2_1_graph:
    # fork
    def __init__(self):
        self.nodes = ["X", "A", "Y"]
        self.edges = [("X", "A"), ("X", "Y")]

# chain


class week2_2_graph:
    def __init__(self):
        self.nodes = ["A", "B", "C"]
        self.edges = [("A", "B"), ("B", "C")]


class collider_graph:
    def __init__(self):
        self.nodes = ["A", "B", "C"]
        self.edges = [("A", "B"), ("C", "B")]


class week2_3_graph:
    def __init__(self):
        self.nodes = ["D", "A", "B", "C"]
        self.edges = [('D', "B"), ("A", "B"), ("B", "C")]


class week2_4_graph:
    # redundant no need to run, chain
    def __init__(self):
        self.nodes = {"A": ["B"], "B": ["C"], "C":  None}


#sg = Simple_Forward_graph()
#graph = Graph(sg.nodes, sg.edges)
# graph.draw()
print("if nodes are d-separated they are blocked or independent")
# fork
w21 = week2_1_graph()
graph1 = Graph(w21.nodes, w21.edges)
print("d_separation A Y condition on X", graph1.d_separation(
    set(["A"]), set(["Y"]), set(["X"])))
print("d_separation A Y condition on None", graph1.d_separation(
    set(["A"]), set(["Y"]), set([])))
graph1.draw()

# chain
w22 = week2_2_graph()
graph2 = Graph(w22.nodes, w22.edges)
print("d_separation A C  condition on B", graph2.d_separation(
    set(["A"]), set(["C"]), set(["B"])))
print("d_separation A C None", graph2.d_separation(
    set(["A"]), set(["C"]), set([])))

graph2.draw()

collider = collider_graph()
graph2a = Graph(collider.nodes, collider.edges)
print("d_separation A C condition on B", graph2a.d_separation(
    set(["A"]), set(["C"]), set(["B"])))
print("d_separation A C condition on None", graph2a.d_separation(
    set(["A"]), set(["C"]), set([])))

graph2a.draw()


w23 = week2_3_graph()
graph3 = Graph(w23.nodes, w23.edges)
graph3.draw()

w24 = week2_4_graph()
graph4 = Graph(w24.nodes, w24.edges)
graph4.draw()
