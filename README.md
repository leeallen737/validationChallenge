
# Validation Challenge

### How to use

Fork this repo, and clone your copy.

Make a branch where you can work on your code.

Commit little and often - AT LEAST ONE COMMIT PER EXERCISE!

When you're ready to review your code, push the branch and make a pull request.

Merge it to main when you're happy with your code.

## Part 1: Validation Functions

Make validation functions as specified below. Each function
must take a single input and return an error message if the input is invalid.

In your browser, open the console and load `index.html`.
Change your functions until they pass the tests in the console.

### `required()`

If a value is empty or false, return this error message: "This field is required"

### `validateNumber()`

If there is a value, and that value is not a number, return the error: "Must be a number"

### `zeroToOneHundred()`

If there is a value, that value must be a number.

It must not be negative, and must not be higher than 100.

If it fails, return the error: "Must be a number between 0 and 100"

### `maxLength20()`

If there is a value, and that value is a string, it must be less than 20 characters long.

If it fails, return the error: "Must be less than 20 characters long"

## Part 2: Using the functions in a form

Make a form with the fields below. For each field, use your existing validation functions.
Each field must have a label.

On submit, validate each field. If there are errors, display them on the page.
If there are no errors, display a success message on the page.

Nickname
- required
- maximum length of 20 characters

Age
- not required
- must be a number
- cannot be less than zero or more than 100

I have read the terms and conditions
- required
- must be a checkbox

## Part 3: Conditional validation

Add these fields to your form.
Use a combination of the functions we created, and new functions, to validate these fields.
On submit, display all the values below the form.

I have a pet
- not required
- must be a checkbox

Pet name
- maximum length of 20 characters
- required if the pet checkbox is checked
- disable the field if the pet checkbox is not checked
- must be empty on submit if the pet checkbox has not been checked

## Part 4: Styling and Events

Add this field to your form and validate it on submit:

Favourite Colour
- required
- must be in a hex code format
    - starts with a hash `#`
    - followed by six characters
    - each character can be a number between 0 and 9, or letter between A and F

###### TIP: Although you can do this with plain JS, you might want to use regex for this

On submit, as well as displaying the hex code and other form values on the page,
change the colour of the page to match the value of the colour field.

# Bonus exercises

## Bonus colour challenge

Make your colour field accept other hex colour formats:

- with or without a hash 
- hex shorthand

These values should be valid:

- `#e2e2e2`
- `e2e2e2`
- `#fff`
- `fff`

This should still display in the longform on the page and correctly change the colour:

- `#e2e2e2` displays as `#e2e2e2`
- `e2e2e2` displays as `#e2e2e2`
- `#fff` displays as `#ffffff`
- `fff` displays as `#ffffff`

## Bonus error message styling

Display error messages under the field causing the error.

Error message should display in red.

Never display more than one error per field.

## Bonus string validation and key events

Prevent the nickname and pet fields from typing numbers.

## Bonus github challenge

Make a branch on your copy of the repository.

Remove the "How to use" section at the top, and add your own description of the project instead.

Feel free to add screenshots (look up "how to add images to markdown"), gifs, emojis and instructions.

Add a link to preview the project at `https://htmlpreview.github.io?link-to-your-html-file-on-github`

Something like [this](https://htmlpreview.github.io?https://github.com/BathSpaWebDev/validationChallenge/blob/main/index.html)!
