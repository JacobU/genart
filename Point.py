class XYPoint:
    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def describe(self):
        print("X: ", self.x, " Y: ", self.y)

class PolarPoint:
    def __init__(self, length, radians) -> None:
        self.length = length
        self.radians = radians
    
    def describe(self):
        print("Length: ", self.length, " Radians: ", self.radians)