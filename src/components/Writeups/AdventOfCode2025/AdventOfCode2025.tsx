import { Grid } from "@mui/material";
import {
  Body,
  Header,
  Page,
  SubHeader,
  Link,
  SubSubHeader,
  TextBlock,
} from "../../common";

function AdventOfCode2025() {
  return (
    <Page>
      <Header>Advent of Code 2025</Header>
      <Body>
        This is mostly a log of my high-level thinking for the{" "}
        <Link href="https://adventofcode.com/2025">Advent of Code 2025</Link>{" "}
        challenges. This probably won't be a super detailed walkthrough for each
        challenge, but who knows. I'm writing this intro before I write the rest
        so I may end up being more detailed than I originally intended to.
        Anyway, if you want code for the challenges, you can find my solutions
        in python{" "}
        <Link href="https://github.com/Fisik343/advent-of-code-2025">here</Link>
        .
      </Body>
      <SubHeader>Table of Contents</SubHeader>
      <Grid container columnSpacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <ul>
            <li>
              <Link scrollTarget="day1">Day 1: Secret Entrance</Link>
            </li>
            <li>
              <Link scrollTarget="day2">Day 2: Gift Shop</Link>
            </li>
            <li>
              <Link scrollTarget="day3">Day 3: Lobby</Link>
            </li>
            <li>
              <Link scrollTarget="day4">Day 4: Printing Department</Link>
            </li>
          </ul>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <ul>
            <li>
              <Link scrollTarget="day5">Day 5: Cafeteria</Link>
            </li>
            <li>
              <Link scrollTarget="day6">Day 6: Trash Compactor</Link>
            </li>
            <li>
              <Link scrollTarget="day7">Day 7: Laboratories</Link>
            </li>
            <li>
              <Link scrollTarget="day8">Day 8: Playground</Link>
            </li>
          </ul>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <ul>
            <li>
              <Link scrollTarget="day9">Day 9: Movie Theater</Link>
            </li>
            <li>
              <Link scrollTarget="day10">Day 10: Factory</Link>
            </li>
            <li>
              <Link scrollTarget="day11">Day 11: Reactor</Link>
            </li>
            <li>
              <Link scrollTarget="day12">Day 12: Christmas Tree Farm</Link>
            </li>
          </ul>
        </Grid>
      </Grid>
      <SubHeader id="day1">Day 1: Secret Entrance</SubHeader>
      <Body>
        View the original problem{" "}
        <Link href="https://adventofcode.com/2025/day/1">here</Link>. View my
        solution{" "}
        <Link href="https://github.com/Fisik343/advent-of-code-2025/blob/main/day1.py">
          here
        </Link>
        .
      </Body>
      <SubSubHeader>Part 1</SubSubHeader>
      <Body>
        There's a dial numbered 0-99 and we have an ordered list of rotations
        with direction and magnitude (e.g. "L94", "R32", "L2", etc.). Given that
        the dial starts at 50, we want to figure out how many times it lands on
        0 after a rotation. Cool, we can just run through the rotations where a
        right rotation adds the magnitude and a left rotation subtracts the
        magnitude, and at the end we can set the current position equal to the
        result of the addition/subtraction mod 100. If the position is 0 at the
        end of a rotation, add 1 to a counter variable. Boom. Done. Easy peasy.
      </Body>
      <SubSubHeader>Part 2</SubSubHeader>
      <Body>
        Now, instead of figuring out how many times it lands on 0 after a
        rotation, we need to figure out how many times it passes 0, even
        mid-rotation. This is slightly trickier, but not the end of the world.
        Before applying the mod 100, there are three cases to consider. If the
        position is exactly zero, add 1 to the counter. If the position is
        greater than 0 it must be a right turn and we should add the position
        divided by 100 without the remainder. If the position is less than 0 it
        must be a left turn so we add the absolute value of (current position -
        1) / 100 without the remainder. If the starting position was 0, we also
        need to subtract one from our counter. Lastly, apply the mod 100 to the
        position before the next rotation.
      </Body>
      <SubHeader id="day2">Day 2: Gift Shop</SubHeader>
      <Body>
        View the original problem{" "}
        <Link href="https://adventofcode.com/2025/day/2">here</Link>. View my
        solution{" "}
        <Link href="https://github.com/Fisik343/advent-of-code-2025/blob/main/day2.py">
          here
        </Link>
        .
      </Body>
      <SubSubHeader>Part 1</SubSubHeader>
      <Body>
        We're given a list of number ranges (e.g. "23-35", "746264-756254",
        etc.). We need to find the sum of numbers within these ranges that are
        made up of two repeated strings (e.g. "33", "746746", etc.). Easy
        enough, just loop through each range and do a quick check to see if the
        number of digits is divisible by 2. If so, see if the first half of the
        digits are the same as the second half of the digits. If both checks
        pass, add the current number to a running total.
      </Body>
      <SubSubHeader>Part 2</SubSubHeader>
      <Body>
        Now it's any arbitrary number of repeated sequences instead of exactly
        half and half. For example, now we also need to include "123123123" and
        "2525252525" in our count. Luckily, this is a natural extension of part
        1. Instead of taking the first half and checking the second half, take
        the first N digits and loop over the number to see if it's made of only
        repetitions of the first N digits using the same check on divisibility
        of number of digits by N to fail early as needed. Do this for N from 1
        to half the total number of digits. If a number matches the repetition
        criteria, add it to a running total then break to the next number to
        ensure that numbers like "24242424" are not counted twice for N=2 and
        N=4.
      </Body>
      <SubHeader id="day3">Day 3: Lobby</SubHeader>{" "}
      <Body>
        View the original problem{" "}
        <Link href="https://adventofcode.com/2025/day/3">here</Link>. View my
        solution{" "}
        <Link href="https://github.com/Fisik343/advent-of-code-2025/blob/main/day3.py">
          here
        </Link>
        .
      </Body>
      <SubSubHeader>Part 1</SubSubHeader>
      <Body>
        We're given a list of 100-digit numbers, and in each number, we need to
        find the largest 2-digit number that can be made by selecting any 2
        digits with or without spaces between them, but we can't rearrange
        digits. So with a smaller example of "71238", the largest value is 78,
        taking the first and last digit. We need the sum of all these largest
        values, so we're using a running sum again. For the 2-digit case, we
        need to find first the best tens place digit then the best ones place
        digit. The tens place can't be the last digit, so we find the first
        instance of the maximum value in the first 99 digits of the given
        number. Then, starting from the digit after the selected tens place
        value, we find the maximum value and that ends up being the ones place
        digit. Add this value to the running sum and move to the next number.
      </Body>
      <SubSubHeader>Part 2</SubSubHeader>
      <Body>
        Now instead of picking a 2-digit number, we're picking the best 12-digit
        number. This is again a natural extension of part 1. For the first
        digit, we search the first 89 digits. Then we search the remaining
        digits after our first selection up through digit 90. Then from our
        second selection through digit 91, and so on. I ended up using python's
        negative indexing to do this, but you don't have to.
      </Body>
      <SubHeader id="day4">Day 4: Printing Department</SubHeader>
      <Body>
        View the original problem{" "}
        <Link href="https://adventofcode.com/2025/day/4">here</Link>. View my
        solution{" "}
        <Link href="https://github.com/Fisik343/advent-of-code-2025/blob/main/day4.py">
          here
        </Link>
        .
      </Body>
      <SubSubHeader>Part 1</SubSubHeader>
      <Body>
        Given a grid with the location of objects marked (it's a boolean grid,
        there either is or isn't an item in each location), our goal is to find
        the number of objects with fewer than four adjacent objects. Okay, we
        just need to iterate over the grid and do a check on all the surrounding
        squares. I really didn't want to write conditionals to handle the edges,
        so I just ended up padding the grid with 1 unit of empty space on each
        side. Smart? I don't know, you can be the judge. Effective? Absolutely.
      </Body>
      <SubSubHeader>Part 2</SubSubHeader>
      <Body>
        This is just like part 1, except that if an object meets the condition
        of having fewer than four adjacent objects, it can be removed and the
        rest of the objects will need to be re-checked. There's probably a
        smarter way, but given the relatively small size of the grid (mine was
        135 by 135) I figured it was safe to just simulate the removal of
        objects meeting the criteria as I scanned through the grid. I kept
        repeating passes through the grid until there was no removal. I think
        technically this is O(N
        <sup>4</sup>) time in the worst case which is definitely terrible, but
        given the size of the data, in the absolute worst case, it's only a
        couple billion simple conditional checks. That's fine. It only has to
        run once. It also might be less than O(N<sup>4</sup>) due to how the
        removals work, but I didn't think that far ahead. The data was small
        enough to simply not care.
      </Body>
      <SubHeader id="day5">Day 5: Cafeteria</SubHeader>
      <Body>
        View the original problem{" "}
        <Link href="https://adventofcode.com/2025/day/5">here</Link>. View my
        solution{" "}
        <Link href="https://github.com/Fisik343/advent-of-code-2025/blob/main/day5.py">
          here
        </Link>
        .
      </Body>
      <SubSubHeader>Part 1</SubSubHeader>
      <Body>
        Given A) a list of ranges (e.g. 2-50, 584-600, etc.) which may overlap
        and B) a list of numbers, our goal is to try to find how many of the
        numbers fall into at least one of the given ranges. This is pretty
        straightforward. Loop over the numbers then loop over the ranges,
        checking whether the number is greater than or equal to the start of the
        range and less than or equal to the end of the range.
      </Body>
      <SubSubHeader>Part 2</SubSubHeader>
      <Body>
        Now the goal is to figure out how many total numbers are in the list of
        all ranges. Given that they overlap, we also need to only count the
        unique numbers in all the ranges. The ranges are so large that it's not
        feasible to keep track of every number that we've seen already, so we'll
        need to be slightly more clever. Let's just make a new list of ranges
        that don't overlap. To make the list of non-overlapping ranges, first
        sort the ranges by starting number. Create an empty list of the new
        ranges and for each range in the original list, check against the list
        of new ranges and if the start of the original is within one of the new
        ranges, change the start to be after the end of the new range.
        Similarly, if the end of the original is within one of the new ranges,
        set the end to be before the start of the new range. After changing the
        start and end to not be within any other ranges, if it's valid (i.e.
        start is less than or equal to the end), add it to the list of new
        ranges. Once done, use a running sum to total up the size of the
        non-overlapping ranges.
      </Body>
      <SubHeader id="day6">Day 6: Trash Compactor</SubHeader>
      <Body>
        View the original problem{" "}
        <Link href="https://adventofcode.com/2025/day/6">here</Link>. View my
        solution{" "}
        <Link href="https://github.com/Fisik343/advent-of-code-2025/blob/main/day6.py">
          here
        </Link>
        .
      </Body>
      <SubSubHeader>Part 1</SubSubHeader>
      <Body>
        Oh great, math homework! To be honest, it's probably best that you just
        look at the{" "}
        <Link href="https://adventofcode.com/2025/day/6">original problem</Link>{" "}
        for an explanation. There's some details about math problems stacked
        vertically with an addition or multiplication sign at the bottom, but
        there's also left and right aligned text. Here's the example from the
        original problem.
      </Body>
      <TextBlock>
        123 328 &nbsp;51 64
        <br />
        &nbsp;45 64&nbsp; 387 23
        <br />
        &nbsp;&nbsp;6 98&nbsp; 215 314
        <br />
        *&nbsp;&nbsp; +&nbsp;&nbsp; *&nbsp;&nbsp; +&nbsp;&nbsp;
      </TextBlock>
      <Body>
        We need to get the sum of each of these vertically stacked problems. For
        now, we ignore the right vs. left alignment and just solve the addition
        and multiplication problems. It really just is just pulling out the
        problems and then doing addition or multiplication as needed. It's just
        nested for-loops. The actual problems are variable-width, so the bulk of
        the code ends up being string processing. I just scanned all the rows at
        once and if the value at the same index in every column was a space, I
        split there. Pretty easy.
      </Body>
      <SubSubHeader>Part 2</SubSubHeader>
      <Body>
        So, now we actually have to worry about the alignment of the text. It
        turns out the numbers we actually want are aligned in columns rather
        than rows. The numbers are read top to bottom instead of left to right.
        Oh, and the columns are ordered from right to left instead of left to
        right (not that it actually matters). It's really the same as part 1,
        except the string processing is a bit different. Still check for the
        column of all spaces as a delimiter, but then read down the columns
        instead of the rows. In my opinion, this one was more tedious than
        challenging.
      </Body>
      <SubHeader id="day7">Day 7: Laboratories</SubHeader>
      <Body>
        View the original problem{" "}
        <Link href="https://adventofcode.com/2025/day/7">here</Link>. View my
        solution{" "}
        <Link href="https://github.com/Fisik343/advent-of-code-2025/blob/main/day7.py">
          here
        </Link>
        .
      </Body>
      <SubSubHeader>Part 1</SubSubHeader>
      <Body>
        Nice, another spatial problem! I like spatial problems. The easiest way
        to describe this one without just restating the original problem is to
        imagine you have a stream of water falling down a cliff and there are
        rocks in the way. When the water hits a rock, it proceeds to fall
        downward with a stream on the left and a stream on the right of the
        rock. The rocks are all in discrete positions (no floating point
        positions, thankfully) and there are not cases where rocks are
        immediately next to each other. Two streams are also able to join back
        up if they're falling in the same position. Given the rock locations and
        the starting position of the water, we need to find how many rocks the
        water hits.
      </Body>
      <Body>
        To solve this, keep track of a set of current water positions, then
        iterate down the cliff. At each level, check for any rocks in one of the
        current positions, and if there is a collision, remove the rock's
        position from the set and add new streams to the left and right of the
        rock. Oh, also add to the running counter.
      </Body>
      <SubSubHeader>Part 2</SubSubHeader>
      <Body>
        Now imagine you have a beach ball that's floating in the stream on its
        way down. We need to find the total number of unique paths to the
        bottom. Sounds like recursion to me. Except oh gosh there's going to be
        way too many paths to recurse down and with the joining back up
        scenarios, there would end up being a lot of duplications of processing.
        Welp, better memoize positions we've already seen. Our function gets the
        number of paths given a position and depth down the waterfall by
        searching down the waterfall from the current position until a collision
        is found. If we haven't already seen the current position and depth
        combination, recursively call the function to the immediate left and
        right of the collision at the current depth, saving the sum of their
        results for later. If we reach the bottom without collision, return 1.
        This ends up building results without repeated calculations, giving us
        our answer. It also handles the splitting + rejoining scenarios. Nice,
        we have an answer... way more than I originally predicted.
      </Body>
      <SubHeader id="day8">Day 8: Playground</SubHeader>
      <Body>
        View the original problem{" "}
        <Link href="https://adventofcode.com/2025/day/8">here</Link>. View my
        solution{" "}
        <Link href="https://github.com/Fisik343/advent-of-code-2025/blob/main/day8.py">
          here
        </Link>
        .
      </Body>
      <SubSubHeader>Part 1</SubSubHeader>
      <Body>
        We're given the 3D location of a bunch of different nodes, and we want
        to connect the ones that are closest together based on their Euclidean
        distance to form circuits. Specifically, we make the first 1000 closest
        connections and then we want to get the product of the size of the three
        largest circuits. This smells like some graph theory to me. We start off
        by getting the pairwise distance between each node (ensuring no
        duplicates and no connecting to self), saving the distance and two node
        indices as an object. Then sort based on distances. We create an
        undirected graph in adjacency list form, using the indices of the
        locations as vertex ID, adding edges for the first 1000 shortest
        distances. Now, using depth first search, we find all the connected
        components. From there, we get the size of each component, sort in
        descending order, and multiply the top three results.
      </Body>
      <SubSubHeader>Part 2</SubSubHeader>
      <Body>
        Okay, now we add the condition that if we were to make a connection that
        wouldn't join two circuits together, we should skip it. Let's keep this
        simple and use a set to represent each individual circuit. So the
        circuits are a list of sets. We want to get the product of X coordinates
        of the last two nodes that are connected to form a circuit containing
        all the nodes. Iterating through the sorted list of distances, we first
        check to see if the two nodes are already in the same circuit. If they
        are, move on with no change. If they aren't, we get the two sets they
        belong to, make a larger set that is the union of the two, add it to the
        list of sets, and then remove the two smaller sets. Keep repeating this
        until there is only a single set in the list. Once done, get the X
        coordinates of the two nodes that were last used and multiply them
        together. Surprisingly, the second part was easier than the first part.
        I do wonder if the first part would have been easier if I had just used
        a similar set approach instead of using depth first search on a graph.
      </Body>
      <SubHeader id="day9">Day 9: Movie Theater</SubHeader>
      <Body>
        View the original problem{" "}
        <Link href="https://adventofcode.com/2025/day/9">here</Link>. View my
        solution{" "}
        <Link href="https://github.com/Fisik343/advent-of-code-2025/blob/main/day9.py">
          here
        </Link>
        .
      </Body>
      <SubSubHeader>Part 1</SubSubHeader>
      <Body>
        We're given a list of 2D points where each coordinate is an unsigned
        integer. We need to find the largest rectangle that can be formed using
        two points as opposite corners of the rectangle. There's probably a nice
        elegant way to do this. But our data isn't big enough to justify it. So,
        keeping a running maximum, we do a pairwise check between the points to
        see if the size of the rectangle between them is larger than the current
        maximum. If so, update our maximum.
      </Body>
      <SubSubHeader>Part 2</SubSubHeader>
      <Body>
        Now the sequential points define line segments, and we need to find the
        largest rectangle between two points that is entirely inside the defined
        shape. Similarly, we've got a running maximum and we're doing a pairwise
        check between two points. Except now before considering the rectangle
        between two points for comparison against the current maximum, we do a
        check. We iterate through all the line segments not involving the
        current two points and see if any line segment intersects the rectangle.
        If there's an intersection, don't consider the rectangle. For the
        intersection check, we use intersection between two axis-aligned
        rectangles similarly to what's described{" "}
        <Link href="https://gdbooks.gitbooks.io/3dcollisions/content/Chapter2/static_aabb_aabb.html">
          here
        </Link>
        .
      </Body>
      <SubHeader id="day10">Day 10: Factory</SubHeader>
      <Body>
        View the original problem{" "}
        <Link href="https://adventofcode.com/2025/day/10">here</Link>. View my
        solution{" "}
        <Link href="https://github.com/Fisik343/advent-of-code-2025/blob/main/day10.py">
          here
        </Link>
        .
      </Body>
      <SubSubHeader>Part 1</SubSubHeader>
      <Body>
        We have a target lighting state (boolean on/off) and a list of buttons
        that toggle all the lights at the indices in a list (e.g. target state
        [0110] and buttons [0], [0, 2, 3], [1, 3]). We want to find the fewest
        number of button presses to reach the target lighting state starting
        from having all lights off. Let's formulate this as a graph problem.
        Each vertex is defined by the integer representation of the binary light
        state, and the directed edges are defined by a xor with the number
        represented by the binary button toggles. From the given example, the
        possible vertices are 0000 (0) to 1111 (15) and the buttons are 1000
        (8), 1011 (11), and 0101 (5) respectively. After constructing this
        graph, we can do a breadth first search until we reach the target state,
        keeping track of the number of traversals required to reach it.
      </Body>
      <SubSubHeader>Part 2</SubSubHeader>
      <Body>
        Now instead of a boolean target lighting state, we have a target charge
        state (e.g. [6, 3, 4, 7]) and the buttons increment the value at each
        index instead of toggling a boolean state. We are still looking for the
        fewest number of button presses to reach the exact state. What a
        headache. I don't think the breadth first search is going to work here,
        the search space is too large. I guess we could dynamically construct it
        and have early fails and bound it, but that sounds difficult. How about
        instead we formulate it as an{" "}
        <Link href="https://en.wikipedia.org/wiki/Integer_programming">
          integer linear programming
        </Link>{" "}
        problem.
      </Body>
      <Body>
        Each button press is weighted equally in our count (one button press is
        one button press) so the{" "}
        <strong>
          <em>c</em>
        </strong>{" "}
        vector is all ones in the standard form. The{" "}
        <strong>
          <em>s</em>
        </strong>{" "}
        vector is entirely made of zero so we can ignore it. The{" "}
        <strong>
          <em>b</em>
        </strong>{" "}
        vector in our case is the target state. That just leaves the{" "}
        <strong>
          <em>A</em>
        </strong>{" "}
        matrix. Given that{" "}
        <strong>
          <em>x</em>
        </strong>{" "}
        represents the number of times each button is pressed and we need{" "}
        <strong>
          <em>Ax</em>
        </strong>{" "}
        to equal{" "}
        <strong>
          <em>b</em>
        </strong>{" "}
        (the target state),{" "}
        <strong>
          <em>A</em>
        </strong>{" "}
        should be constructed such that{" "}
        <strong>
          <em>
            A<sub>ij</sub>
          </em>
        </strong>{" "}
        is 1 if button at index{" "}
        <strong>
          <em>j</em>
        </strong>{" "}
        increments the state of index{" "}
        <strong>
          <em>i</em>
        </strong>{" "}
        and 0 otherwise. That is to say, the columns are the binary masks of the
        buttons from part 1. Then, once these are all constructed, we use an ILP
        solver because programming that from scratch seems like it's not worth
        the effort here. This might be neat to go back and revisit as a learning
        exercise, but it's a bit out of scope for quickly doing a challenge.
      </Body>
      <SubHeader id="day11">Day 11: Reactor</SubHeader>
      <Body>
        View the original problem{" "}
        <Link href="https://adventofcode.com/2025/day/11">here</Link>. View my
        solution{" "}
        <Link href="https://github.com/Fisik343/advent-of-code-2025/blob/main/day11.py">
          here
        </Link>
        .
      </Body>
      <SubSubHeader>Part 1</SubSubHeader>
      <Body>
        Neat, we're given an adjacency list for a directed graph. Let's just
        load that directly. Now we're trying to find the number of paths between
        two specified points. I sure hope this is a{" "}
        <Link href="https://en.wikipedia.org/wiki/Directed_acyclic_graph">
          DAG
        </Link>
        , otherwise this might get slightly messy. First let's check that. If it
        can be{" "}
        <Link href="https://en.wikipedia.org/wiki/Topological_sorting">
          topologically sorted
        </Link>{" "}
        via Kahn's algorithm, then it's a DAG. A quick implementation and a
        check later, and we find out that it's a DAG!
      </Body>
      <Body>
        With the knowledge that it's a DAG, we can use dynamic programming,
        similarly to day 7. Recursive function with memoization time! If the
        start point is equal to the end point, return 1. If the start point is
        in the memoized map, return it. Otherwise, sum over recursive calls
        using all neighbors as the starting point and save the sum into the
        memoized map. Return the saved value. Now, we call our function with the
        start and end points, and we're good to go.
      </Body>
      <SubSubHeader>Part 2</SubSubHeader>
      <Body>
        Now we have a different start and end, and we need the path to go
        through two other specified vertices. Call these nodes intA and intB
        ("int" for "intermediate"). Using the knowledge that it's a DAG, we can
        multiply the number of paths from start to intA, the number of paths
        from intA to intB, and the number of paths from intB to end. It's not
        guaranteed that intA appears before intB in the topological sorting, so
        this value may be zero. So we also add the product of the number of
        paths from start to intB, intB to intA, and intA to end. We now have our
        answer regardless of which one comes first in the topological sort.
      </Body>
      <SubHeader id="day12">Day 12: Christmas Tree Farm</SubHeader>
      <Body>
        View the original problem{" "}
        <Link href="https://adventofcode.com/2025/day/12">here</Link>. View my
        solution{" "}
        <Link href="https://github.com/Fisik343/advent-of-code-2025/blob/main/day12.py">
          here
        </Link>
        .
      </Body>
      <Body>
        This was the only puzzle with only a part 1. Well, story-wise there was
        a part 2 but it involved clicking a button/link and was a freebie.
      </Body>
      <Body>
        We are given six different shapes that fit within 3 by 3 squares (each
        cell is a boolean for whether it's part of the shape). We're also given
        a bunch of grid sizes and counts for each shape that we need to try to
        squeeze into the grid. The shapes can be rotated and/or reflected so
        that they can be more tightly packed together, even if it means
        overlapping the 3 by 3 squares to have the empty spaces filled.
        Honestly, the{" "}
        <Link href="https://adventofcode.com/2025/day/12">
          original problem
        </Link>{" "}
        describes it way better. We want to find the number of problems that
        have a valid packing possibility.
      </Body>
      <Body>
        This seems like a really <em>really</em> difficult problem to solve.
        It's probably best to do a quick fail check to immediately rule out the
        problems where the total area of the shapes is larger than the number of
        the grids. So for each shape, get the area (1 to 9) and sum up the total
        required size based on the number of each shape is required for each
        problem. Then check against the area of the problem's grid. If the
        shapes would require too much space regardless of how perfectly they're
        packed, the problem cannot be solved, rule it out. This cuts the number
        of possible problems with this fast fail approach. I just tried the
        number of problems that weren't immediately ruled out for the shapes
        taking too much total space, and it worked! This is not a general
        solution, but it worked for me.
      </Body>
      <Body>
        If I had to go back and refine the solution more, I'd also add a fast
        success check which would see if a packing is possible if each shape
        took up the full 3 by 3 space. Basically, the check would take the grid
        size, do integer division of each dimension by 3, multiply the divided
        dimensions, and then see if the number of shapes requested to fit in the
        grid is less than the number of 3 by 3 spaces available on the grid. But
        it ended up not being needed so I didn't revise the code.
      </Body>
    </Page>
  );
}

export default AdventOfCode2025;
