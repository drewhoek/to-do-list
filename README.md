# Server Side Calculator

## Description

This project is a calculator that takes inputs from the client, packages them into an object and sends them to the server for calculating via a POST request. A "C" button will clear the inputs and the current operator. Having the calculations done on the server takes load of off the client to execute whatever calculations need to be done. Once the calculations have been completed. The entire equation is packaged into another object, pushed into the history array. The answer to the most recent equation is sent back with a GET request and displayed on the DOM under the inputs. The history array is sent back in a seperate GET request and then displayed on the DOM in an unordered list.

## How to install/use
1. To use the application on a local host we need to install express. To do so see here: https://expressjs.com/en/starter/installing.html
2. Once the server is initialized you can view the information on the localhost at whatever PORT you have specified the server to live on. In this case 5000.
3. Enter two numbers in the inputs and select the operator via a button.
4. Press the equals button and the result will be displayed on the DOM as well as previous equations that are within the history on the server.
5. Press the "C" to clear inputs and current operator.

## Built with
- HTML/CSS
- Javascript
    - Jquery
        -  Ajax
    - Node
- Express
- Tested with Postman

## Acknowlegments 
Thanks again to all of EDA for the help this week with being virtual. It is really really appreciated!
