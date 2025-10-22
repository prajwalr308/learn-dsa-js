# Sliding Window Pattern

Imagine you have a tray of 10 cookies and want to find the most chocolate chips
in any 3 cookies next to each other.Using a naive approach, you’d stand at each
cookie and count its chocolate chips along with those of its immediate left and
right neighbors to form every possible group of 3. This means repeating the
counting process for each cookie, which quickly becomes inefficient as the number
of cookies grows.

We can avoid this hassle by using a smarter approach. Instead of recounting the chips
for each group from scratch, you start by counting the chips in the first 3 cookies.
Then, as you move to the next group, you simply subtract the chips
from the cookie you
leave behind and add the chips from the new cookie you include.

## Consider the following steps

**Step 1:** Count the chips in the first three cookies.
This is your starting total—and your initial “best so far.”

**Step 2:** Slide the window one cookie to the right:

- Subtract the chips from the cookie that just slipped out of the window.
- Add the chips from the fresh cookie that slid into view.

**Step 3:** If this new sum tops your current record,
replace it with the initial “best so far”.

**Step 4:** Repeat the above steps for each group of three cookies,
all the way to the last one.

By updating the total in constant time with each slide,
you find the group of neighboring cookies with maximum chocolate
chips without ever recounting the entire window—a
perfect illustration of the sliding-window technique.
