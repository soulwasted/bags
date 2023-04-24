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
Having M1 processor?
goto: [https://stackoverflow.com/questions/68935932/install-python2-on-mac-with-m1-chip](https://stackoverflow.com/questions/68935932/install-python2-on-mac-with-m1-chip)

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
```
or locally
```
./node_modules/gulp/bin/gulp.js
```

For fractal use:
```
$ fractal start --sync
```

## Notes
If looks messy in fractal (BAGS — Design system), change some scss and let recompile.


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
