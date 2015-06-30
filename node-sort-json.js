#!/usr/bin/env node

var input = ''

process.stdin

  // Buffer up stdin.
  .on('data', function(buffer) {
    input += buffer.toString()
  })

  .on('end', function() {
    // Add brackets if needed
    input = input.trim()
    if (input[0] !== '[') {
      input = '[' + input + ']'
    }
    // Parse, sort, stringify, and write.
    console.log(JSON.stringify(JSON.parse(input).sort()))
  })

process.stdin.resume()
