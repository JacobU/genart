import math
from Point import XYPoint

def distanceBetweenTwoXYPoints(point1: XYPoint, point2: XYPoint) -> int:
    return math.dist([point1.x, point1.y], [point2.x, point2.y])

def getPointAFractionBetweenTwoPoints(point1: XYPoint, point2: XYPoint, fraction: float) -> XYPoint:
    '''
    This returns a point some arbitrary fraction between the two points given, starting from point1. 
    Ie. if two points are (0,0) and (0,5) and the fraction is 2/5, the point returned is (0,2).
    '''
    x = point1.x + (point2.x - point1.x) * fraction
    y = point1.y + (point2.y - point1.y) * fraction
    return XYPoint(x, y)

def getVectorFromTwoXYPoints(a: XYPoint, b: XYPoint):
    '''
    Gets the vector AB, or equivalent to (b - a)
    '''
    return XYPoint(b.x - a.x, b.y - a.y)

def addTwoXYPoints(a: XYPoint, b: XYPoint):
    return XYPoint(a.x + b.x, a.y + b.y)