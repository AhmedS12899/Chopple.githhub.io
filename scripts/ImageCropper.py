import urllib.request
import random
from PIL import Image


# Photo cropper for hint
#crops character image into a fourth
#needs to be tested on site
def ImgHint(url):
    urllib.request.urlretrieve(url,"pic.png")
    im = Image.open(r"pic.png")
    #im.show()
     
    width, height=im.size
    left = int(random.choice([0, (width/2)]))
    right= left + width/2
    top =int(random.choice([0,height/2]))
    bottom = top +height/2
    newIm=im.crop((left,top,right,bottom))
    #newIm.show()

url="https://static.wikia.nocookie.net/onepiece/images/8/8c/A_O_Anime_Infobox.png/revision/latest?cb=20160102105316"
ImgHint(url)

