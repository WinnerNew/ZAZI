const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const url = require('url');
const querystring = require('querystring');
const _ = require('underscore');
const sever = http.createServer();

//服务监听"request"事件,req为request res为respond
sever.on("request", (req, res) => {
    //封装文件读取并把读取到得数据响应给客户端得函数,并挂载到res对象上
    res.render = function (filename) {
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.end('文件不存在 404');
            } else {
                res.setHeader('Content-Type', mime.getType(filename));
                res.end(data)
            }
        }
        )
    }
    //将用户请求得路径和方法转换为小写字符串
    req.url = req.url.toLowerCase();
    req.method = req.method.toLowerCase();
    var urlObj = url.parse(req.url, true);
    //
    var publicDir = path.join(__dirname);
    //请求文件的路径以及文件名拼接
    var filename = path.join(publicDir, req.url);
    //urlObj.query.title => /add?title='asdsad'&....
    if(urlObj.pathname === '/datail.html'){
        fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', function (err, data) {
            //因为第一次访问json文件本事就不存在,所以判断读取失败抛出的异常不需要抛出
            if (err && err.code !== 'ENOENT') { throw err }
            //如果读取到文件中的数据则转化为数组对象,如果没有数据则返回[]
            var list = JSON.parse(data || "[]");
            res.render(filename);
        });
    //当使用get方法提交数据
    }else if (urlObj.pathname === '/add' && req.method === 'get') {
        fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', function (err, data) {
            //因为第一次访问json文件本事就不存在,所以判断读取失败抛出的异常不需要抛出
            if (err && err.code !== 'ENOENT') { throw err }
            //如果读取到文件中的数据则转化为数组对象,如果没有数据则返回[]
            var list = JSON.parse(data || "[]");
            //获取用户get提交过来的数据
            list.push(urlObj.query);
            //把数据存储到json文件中
            fs.writeFile(path.join(__dirname, 'data', 'data.json'), JSON.stringify(list), function (err, data) {
                if (err) { throw err }
                console.log('提交成功');
                res.statusCode = 302;
                res.statusMessage = 'Found';
                res.setHeader('Location', '/index.html');
                res.end();
            })

        })

        //使用post方法提交数据
    } else if (urlObj.pathname === '/add' && req.method === 'post') {
        fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', function (err, data) {
            if (err && err.code !== 'ENOENT') { throw err }
            var list = JSON.parse(data || "[]");
            //获取用户post提交过来的数据
            //获取post提交过来的数据,post数据常常比较大,所以使用的分次提交数据
            //此时需要监听request事件中的data事件
            //当所有数据都从客户端提交到服务器,request对象的end事件会被触发
            //定义一个数组用于存放客户端每次提交过来的数据
            var arr = [];
            req.on('data', function (chunk) {
                //chunk保存的是每次提交过来的一部分数据,数据类型是Buffer
                //每次触发一次data,提交过来一次chunk数据
                arr.push(chunk)
            })
            req.on('end', function () {
                //将保存了Buffer对象的数组转换为一个Buffer对象存放到dataBody中
                var dataBody = Buffer.concat(arr);
                //把获取到的整个Buffer对象转换成字符串对象
                var postBody = dataBody.toString('utf8');
                var postBody = querystring.parse(postBody);
                //把数据存放到数组中
                list.push(postBody);
                //把数据存储到json文件中
                fs.writeFile(path.join(__dirname, 'data', 'data.json'), JSON.stringify(list), function (err, data) {
                    if (err) { throw err }
                    console.log('提交成功');
                    res.statusCode = 302;
                    res.statusMessage = 'Found';
                    res.setHeader('Location', '/index.html');
                    res.end();
                })
            })


        })


    } else {
        res.render(filename);
    }

}).listen(80, () => {
    console.log(`Server running at http:/localhost:80`);
});