import sys
import pygame
from math import floor, e
from Point import XYPoint
from line_circle import getExpandingPointsAroundOrigin
from sierpinski_gasket import generateSierpinskiPoints
from towers import createTower, getRandomHeight, createRandomStartPoints

start = [XYPoint(-2, 0.5), XYPoint(0,0), XYPoint(3, 0.5)]
height = 100


def drawATower(tower, screen, colour):
    pointList = tower[0]
    count = 0
    towerHeight = len(tower[0])
    
    for points in pointList:
        if count % 2 == 0:
            pygame.draw.line(screen, colour, (points[1].x, points[1].y), (points[0].x, points[0].y))
            pygame.draw.line(screen, colour, (points[1].x, points[1].y), (points[2].x, points[2].y))
        else:
            pygame.draw.line(screen, colour, (points[1].x, points[1].y), (points[2].x, points[2].y))
        count += 1
            
    pygame.draw.line(screen, colour, (pointList[0][0].x, pointList[0][0].y), (pointList[towerHeight-1][0].x, pointList[towerHeight-1][0].y))
    pygame.draw.line(screen, colour, (pointList[0][1].x, pointList[0][1].y), (pointList[towerHeight-1][1].x, pointList[towerHeight-1][1].y))
    pygame.draw.line(screen, colour, (pointList[0][2].x, pointList[0][2].y), (pointList[towerHeight-1][2].x, pointList[towerHeight-1][2].y))

def updatePointForDrawing(point: XYPoint):
    point.x = 500 - (point.x * 4)
    point.y = 700 - (point.y * 4) 

def main():
    pygame.init()

    size = width, height = 1000, 1000
    center = (width/2, height/2)
    
    # Colours 
    white = 255, 255, 255
    black = 0, 0, 0
    red = 117, 32, 32
    blue = 21, 76, 121
    
    screen = pygame.display.set_mode(size)
    pygame.display.set_caption("Tower #1")

    clock = pygame.time.Clock()
    
    listOfTowers = []
    numTowers = 255
    for i in range(numTowers):
        randStartPoints = createRandomStartPoints()
        randHeight = getRandomHeight()
        randTower = createTower(randStartPoints, randHeight)
        listOfTowers.append(randTower)
        
    # update points
    for tower in listOfTowers:
        for points in tower[0]:
            updatePointForDrawing(points[0])
            updatePointForDrawing(points[1])
            updatePointForDrawing(points[2])
        updatePointForDrawing(tower[1])
    
    towerIncrement = 0
    while towerIncrement < numTowers: #count < numPoints:
        clock.tick(10)

        for event in pygame.event.get():
            if event.type == pygame.QUIT: sys.exit()

        screen.fill(white)

        i = 0
        while i < towerIncrement:
            drawATower(listOfTowers[i], screen, (towerIncrement, numTowers - towerIncrement, towerIncrement))
            i += 1
        towerIncrement += 1
        pygame.display.flip()

if __name__ == "__main__":
    main()
