# bags

Use node.js version 10. And Gulp v3.

### Try nvm
```
$ nvm i 10
$ nvm use 10
$ node -v
# should be node version 10.x.x
```

## Set Environment

### Repo
```
$ gh repo clone soulwasted/bags
```

### Install
```
$ npm i
$ npm i gulp@3
```

### Fractal
To run component library building.
```
# $ npm install --save @frctl/fractal
$ npm i -g @frctl/fractal
```

## Run
```
$ gulp
$ fractal start --sync
```


## Production
Maybe
```
$ gulp production
```
then
```
$ fractal build
```

Good luck ;)


![hypnotoad](assets/img/hypnotoad.gif)
