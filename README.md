# My-Feedback-Application

## Overview
This project implements a Floating Action Button (FAB) for feedback, allowing users to report issues, share feedback, give suggestions, and contact support. The feature is designed to be configurable based on the page, showing different options according to the context.

## Features
- Configurable options for different pages
- FAB button opens all options and changes to close button
- Different UI and interaction for desktop and mobile
- Submission tracking based on the page
- Configurable visibility and options for each page

## Desktop Version
- FAB placement: Bottom right corner, 32px from right and bottom
- FAB button color: #F8F8F8, icon color: #0F0F0F
- Selected FAB button ellipse color: #808080
- Drop shadow for FAB icon and text: x - 1, y - 1, blur - 8, color - #000000 (50% opacity)
- Drop shadow for all option list text: x - (-4), y - 2, blur - 8, color - #000000 (24% opacity)
- Drop shadow for submit button: x - 0, y - 4, blur - 6, color - #000000 (6% opacity)

## Mobile Version
- FAB placement: Bottom right corner, 24px from right and bottom
- FAB button color: #0F0F0F, icon color: #F8F8F8
- Selected FAB button ellipse color: #F8F8F8
- Background overlay opacity: 70% of #000000

## Interaction
- Clicking on an option selects it and opens corresponding card
- Close button clears content and closes the section
- Navigation options for switching between options
- Content is not erased when switching options
- Selected option highlighted

## Submitting Feedback
- Different cards for each option with specific fields
- Mandatory fields have validation and error messages
- Logged-in users' data is stored, anonymous option available
- Non-logged-in users' data is optional, error message for incorrect email

## Thanks Message
- Popup appears above FAB button after submission
- Different messages for each option
- Disappears after a delay of 5000ms

## Rate Us Card
- Appears after a delay of 2000ms or when user is prompted
- Centered on all devices with background overlay
- Close button to close the card
- Submit button appears when user clicks on any star
- Thanks card appears after submission, auto-disappears after 2000ms if not closed
