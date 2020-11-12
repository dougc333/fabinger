

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
        self.nodes = {"A": ["Y"], "Y": None}


class Basic_Confounder_graph:
    def __init__(self):
        self.nodes = {"A": ["Y"], "B": ["A", "Y"], "Y": None}


class Basic_Collider_graph:
    def __init__(self):
        self.nodes = {"A": ["B"], "B": None, "Y": ["B"]}


class week2_1_graph:
    def __init(self):
        self.nodes = {"X": ["A", "Y"], "A": None, "Y": None}


class week2_1_graph:
    def __init(self):
        self.nodes = {"X": ["A", "Y"], "A": None, "Y": None}


class week2_2_graph:
    def __init(self):
        self.nodes = {"A": ["B"], "B": ["C"], "C": None}


class week2_3_graph:
    def __init(self):
        self.nodes = {"D": ["B"], "A": ["B"], "B": ["C"], "C": None}


class week2_4_graph:
    def __init(self):
        self.nodes = {"A": ["B"], "B": ["C"], "C":  None}


sg = Simple_Forward_graph()
print("sg:", sg)
fc = FindCollider(sg)
