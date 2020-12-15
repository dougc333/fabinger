
from graph import Graph


class week2_2_1:
    def __init__(self):
        self.nodes = ["A", "B", "D", "E", "G"]
        self.edges = [("D", "A"), ("D", "E"), ("G", "A"),
                      ("E", "G"), ("A", "B"), ("G", "B")]

    def num_paths(self, first_node, second_node):
        # num paths first_node->second_node
        return None


class week2_2_2:
    def __init__(self):
        self.nodes = ["A", "B", "D", "E", "G"]
        self.edges = [("D", "A"), ("D", "E"), ("G", "A"),
                      ("E", "G"), ("A", "B"), ("G", "B")]


class week2_2_3:
    def __init__(self):
        self.nodes = ["A", "B", "D", "E", "G"]
        self.edges = [("D", "A"), ("D", "E"), ("G", "A"),
                      ("E", "G"), ("A", "B"), ("G", "B")]

    def is_independent(self, node1, node2, node3):
        return None


class week2_2_4:
    def __init__(self):
        self.nodes = ["A", "B", "D", "E", "G"]
        self.edges = [("D", "A"), ("D", "E"), ("G", "A"),
                      ("E", "G"), ("A", "B"), ("G", "B")]

    def is_independent(self, node1, node2):
        return None


class week2_2_5:
    def __init__(self):
        self.nodes = ["A", "B", "D", "E", "G"]
        self.edges = [("D", "A"), ("D", "E"), ("G", "A"),
                      ("E", "G"), ("A", "B"), ("G", "B")]

    def num_parents(self, node1):
        return None


class week2_2_6:
    def __init__(self):
        self.nodes = ["A", "B", "C", "G", "H", "Y"]
        self.edges = [("G", "A"), ("G", "Y"), ("G", "C"),
                      ("B", "A"), ("B", "Y"), ("B", "C"),
                      ("A", "Y"), ("H", "Y")]

    def num_backdoor_paths(self, node1, node2):
        return None


class week2_2_7:
    def __init__(self):
        self.nodes = ["A", "B", "C", "G", "H", "Y"]
        self.edges = [("G", "A"), ("G", "Y"), ("G", "C"),
                      ("B", "A"), ("B", "Y"), ("B", "C"),
                      ("A", "Y"), ("H", "Y")]

    def num_unblocked_backdoor_paths(self, node1, node2):
        return None


class week2_2_8:
    def __init__(self):
        self.nodes = ["A", "B", "C", "G", "H", "Y"]
        self.edges = [("G", "A"), ("G", "Y"), ("G", "C"),
                      ("B", "A"), ("B", "Y"), ("B", "C"),
                      ("A", "Y"), ("H", "Y")]

    def conditioning(self, node1):
        return None


class week2_2_9:
    def __init__(self):
        self.nodes = ["A", "B", "C", "G", "H", "Y"]
        self.edges = [("G", "A"), ("G", "Y"), ("G", "C"),
                      ("B", "A"), ("B", "Y"), ("B", "C"),
                      ("A", "Y"), ("H", "Y")]

    def conditioning_backdoor(self, set_nodes):
        return None


class week2_2_10:
    def __init__(self):
        self.nodes = ["A", "B", "C", "G", "H", "Y"]
        self.edges = [("G", "A"), ("G", "Y"), ("G", "C"),
                      ("B", "A"), ("B", "Y"), ("B", "C"),
                      ("A", "Y"), ("H", "Y")]

    def set_disjunctive(self):
        return None


class week2_2_11:
    def __init__(self):
        self.nodes = ["A", "B", "C", "G", "H", "Y"]
        self.edges = [("G", "A"), ("G", "Y"), ("G", "C"),
                      ("B", "A"), ("B", "Y"), ("B", "C"),
                      ("A", "Y"), ("H", "Y")]

    def sat_backdoor(self, set_s):
        return None


w22 = week2_2_2()
g = Graph(w22.nodes, w22.edges)
g.draw()
bd_22 = g.backdoor_paths("G", "B")
print(" num backdoor paths w22:", len(bd_22))
print("backdoor paths w22:", bd_22)

print("------------------")
w23 = week2_2_3()
g = Graph(w23.nodes, w23.edges)
print(g.d_separation(set(["G"]), set(["D"]), set(["E"])))

print("------------------")
w24 = week2_2_4()
g = Graph(w24.nodes, w24.edges)
print(g.d_separation(set(["G"]), set(["D"]), set([])))


print("------------------")
w26 = week2_2_6()
g = Graph(w26.nodes, w26.edges)
bd_26 = g.backdoor_paths("A", "Y")
print(" num backdoor paths w22:", len(bd_26))


print("------------------")
w27 = week2_2_7()
g = Graph(w27.nodes, w27.edges)
bd_27 = g.backdoor_paths("A", "Y")
print(" num backdoor paths w22:", len(bd_27))
