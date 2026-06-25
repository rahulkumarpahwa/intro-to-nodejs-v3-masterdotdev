import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv)).command('curl <url>', 'Execute a curl command', (yargs) => {
  return yargs
    .positional('url', {
      describe: 'The URL to curl',
      type: 'string'
    });

}, handleCurl).demandCommand(1).parse();

function handleCurl(argv) {
    fetch(argv.url)
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error executing curl command:', error);
        });
}


// Note: hideBin is a shorthand for process.argv.slice(2). It has the benefit that it takes into account variations in some environments, e.g., Electron.
