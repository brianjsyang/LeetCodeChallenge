#!/bin/bash

#This code will parse from list of phone numbers (one per line).
#And only print properly typed phone numbers.

grep -P '^(\d{3}-\d{3}-\d{4}|\(\d{3}\) \d{3}-\d{4})$' file.txt