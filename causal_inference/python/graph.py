

import networkx as nx
import matplotlib.pyplot as plt
#from networkx.algorithms import d_separated


class Graph:
    def __init__(self, nodes, edges):
        self.nodes = nodes
        self.edges = edges
        self.digraph = nx.DiGraph()
        self.digraph.add_nodes_from(self.nodes)
        self.digraph.add_edges_from(self.edges)
        self.graph = nx.Graph()
        self.graph.add_nodes_from(self.nodes)
        self.graph.add_edges_from(self.edges)

    def draw(self):
        nx.draw(self.digraph, with_labels=True, font_weight='bold')
        plt.show()

    def find_prob(self):
        return None

    def backdoor_paths(self, node1="A", node2="Y"):
        bd_paths = []
        for path in nx.all_simple_paths(self.graph, node1, node2):
            print(path, len(path))
            if len(path) > 2:
                bd_paths.append(path)
        return bd_paths

    def d_separation(self, node1, node2, node3):
        foo = nx.d_separated(self.digraph, node1, node2, node3)
        return foo
