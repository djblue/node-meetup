var stdin = process.stdin;
var stdout = process.stdout;

stdin.resume();

stdout.write('echo-cli v1\n');

stdin.on('data', function (data) {
  stdout.write(data.length + ': ');
});

stdin.pipe(stdout);
