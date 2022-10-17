import random

from helpers import getPointAFractionBetweenTwoPoints
from Triangle import Triangle
from Point import XYPoint


def generateSierpinskiPoints(numPoints: int, fraction: float):
    triangle = Triangle(XYPoint(-50, 0), XYPoint(50, 0), XYPoint(0, 86.6))
    points = []
    movingPoint = XYPoint(0, 0)
    for x in range(numPoints):
        trianglePointToTravelTowards = random.randint(0, 2)
        if trianglePointToTravelTowards == 0:
            movingPoint = getPointAFractionBetweenTwoPoints(movingPoint, triangle.a, fraction)
        elif trianglePointToTravelTowards == 1:
            movingPoint = getPointAFractionBetweenTwoPoints(movingPoint, triangle.b, fraction)
        else:
            movingPoint = getPointAFractionBetweenTwoPoints(movingPoint, triangle.c, fraction)
        points.append(movingPoint)
    return points

def main():
    sierpinskiPoints = generateSierpinskiPoints(100, 0.5)
    for point in sierpinskiPoints:
        point.describe()
    
if __name__ == "__main__":
    main()