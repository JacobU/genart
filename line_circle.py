'''
We will imagine a grid 200 x 200 units (that is 100 in each x and y direction)
We will draw a dot at every x/2(pi) radians (x being figured out later), and that dots distance from the origin will increase along with x.
We will store all these dots and then draw them as lines stemming from the origin on our canvas.
'''

import math
from Point import XYPoint, PolarPoint

canvasDimensions = 100

def polarToCartesian(point: PolarPoint) -> XYPoint:
    x = point.length * math.cos(point.radians)
    y = point.length * math.sin(point.radians)    
    return XYPoint(x, y)

def cartesianToPolar(point: XYPoint):
    length = math.sqrt(math.pow(point.x,2) + math.pow(point.y,2))
    angle = math.atan2(point.y,point.x)
    return PolarPoint(length, angle)

def getExpandingPointsAroundOrigin(radiansPerNewPoint):
    xyPoints = []
    radians = 0
    radiusPerNewPoint = canvasDimensions / (math.tau / radiansPerNewPoint) 
    radius = 0
    while radians < (math.tau):
        radians += radiansPerNewPoint
        radius += radiusPerNewPoint
        polarPoint = PolarPoint(radius, radians)
        xyPoints.append(polarToCartesian(polarPoint))

    return xyPoints
        
def main():
    points = getExpandingPointsAroundOrigin(0.1)
    for p in points:
        p.describe()

if __name__ == "__main__":
    main()
    


