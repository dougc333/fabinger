

class week2_2_1:
    def __init(self):
        self.nodes = {"A": [], "B": [], "D": [], "E": [], "G": []}

    def num_paths(self, first_node, second_node):
        # num paths first_node->second_node


class week2_2_2:
    def __init(self):
        self.nodes = {"A": ["B"], "B": None,
                      "D": ["A", "E"], "E": ["G"], "G": ["A", "B"]}

    def num_backdoor_paths(self):
        return None


class week2_2_3:
    def __init__(self):
        self.nodes = {"A": ["B"], "B": None,
                      "D": ["A", "E"], "E": ["G"], "G": ["A", "B"]}

    def is_independent(self, node1, node2, node3):
        return None


class week2_2_4:
    def __init__(self):
        self.nodes = {"A": ["B"], "B": None,
                      "D": ["A", "E"], "E": ["G"], "G": ["A", "B"]}

    def is_independent(self, node1, node2):
        return None


class week2_2_5:
    def __init__(self):
        self.nodes = {"A": ["B"], "B": None,
                      "D": ["A", "E"], "E": ["G"], "G": ["A", "B"]}

    def num_parents(self, node1):
        return None


class week2_2_6:
    def __init__(self):
        self.nodes = {"A": ["Y"], "B": ["A", "Y"],
                      "C": None, "G": ["A", "C", "Y"], "H": ["Y"], "Y": None}

    def num_backdoor_paths(self, node1, node2):
        return None


class week2_2_7:
    def __init__(self):
        self.nodes = {"A": ["Y"], "B": ["A", "Y"],
                      "C": None, "G": ["A", "C", "Y"], "H": ["Y"], "Y": None}

    def num_unblocked_backdoor_paths(self, node1, node2):
        return None


class week2_2_8:
    def __init__(self):
        self.nodes = {"A": ["Y"], "B": ["A", "Y"],
                      "C": None, "G": ["A", "C", "Y"], "H": ["Y"], "Y": None}

    def conditioning(self, node1):
        return None


class week2_2_9:
    def __init__(self):
        self.nodes = {"A": ["Y"], "B": ["A", "Y"],
                      "C": None, "G": ["A", "C", "Y"], "H": ["Y"], "Y": None}

    def conditioning_backdoor(self, set_nodes):
        return None


class week2_2_10:
    def __init__(self):
        self.nodes = {"A": ["Y"], "B": ["A", "Y"],
                      "C": None, "G": ["A", "C", "Y"], "H": ["Y"], "Y": None}

    def set_disjunctive(self):
        return None


class week2_2_11:
    def __init__(self):
        self.nodes = {"A": ["Y"], "B": ["A", "Y"],
                      "C": None, "G": ["A", "C", "Y"], "H": ["Y"], "Y": None}

    def sat_backdoor(self, set_s):
        return None
