from Point import XYPoint
from helpers import getVectorFromTwoXYPoints, addTwoXYPoints
import random

origin = XYPoint(0,0)
leftCorner = XYPoint(-1, 0.5)
rightCorner = XYPoint(1, 0.5)

def getTowerTopPoint(endingPoints: list[XYPoint]):
    '''
    With points a, b, c representing the left, center and right point in the tower. The formula for generating the last point is:
    point = a + c - b 
    '''
    a = endingPoints[0]
    b = endingPoints[1]
    c = endingPoints[2]

    topOfTower = addTwoXYPoints(a, getVectorFromTwoXYPoints(b,c))
    return topOfTower

def createTower(startingPoints: list[XYPoint], height: int):
    '''
    In creating a tower we want to have 3 points. The left, middle and right. From these three points, we can draw lines to create the illusion of depth.
    When we reach the top of the tower we can draw the end of it, finishing the illusion of depth.
    A tower, undrawn, thus consists of a tuple of a list of triples and a single point. Ie. ([(left, center, right)], point)
    '''
    leftCenterRightPoints = []
    for i in range(height):
        left = XYPoint(startingPoints[0].x, startingPoints[0].y + i)
        center = XYPoint(startingPoints[1].x, startingPoints[1].y + i)
        right = XYPoint(startingPoints[2].x, startingPoints[2].y + i)
        points = (left, center, right)
        leftCenterRightPoints.append(points)
    top = getTowerTopPoint(leftCenterRightPoints[height-1])
    return (leftCenterRightPoints, top)
    
def createRandomStartPoints():
    x = random.randint(-50,50)
    y = random.randint(-10,10)
    left = XYPoint(x-1, y+0.5)
    center = XYPoint(x,y)
    right = XYPoint(x+1, y+0.5)
    return [left, center, right]

def getRandomHeight():
    return random.randint(20,100)
    
def main():
    height = 100
    tower = createTower([leftCorner, origin, rightCorner], height)
    base = tower[0]
    top = tower[1]
    for i in range(height):
        base[i][0].describe()
        base[i][1].describe()
        base[i][2].describe()
    top.describe() 


if __name__ == "__main__":
    main()