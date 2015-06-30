#!/usr/bin/env node

var input = ''

process.stdin
  .on('data', function(buffer) {
    input += buffer.toString()
  })
  .on('end', function() {
    console.log(JSON.stringify(JSON.parse(input).sort()))
  })

process.stdin.resume()
