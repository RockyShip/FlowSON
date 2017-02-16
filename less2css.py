import os
os.system("./node_modules/.bin/lessc ./public/styles/main.less ./build/styles/main.css")
print("Compiled LESS into CSS")
