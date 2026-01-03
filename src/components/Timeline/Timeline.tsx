import { useReducer } from "react";
import { Body, Header, SubHeader, Page, Link } from "../common";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const timelineData = [
  {
    title: "Advent of Code 2025",
    date: "December 2025",
    body: (
      <Body>
        I participated in{" "}
        <Link href="https://adventofcode.com/">Advent of Code</Link> this year,
        implementing all solutions in Python (
        <Link href="https://github.com/Fisik343/advent-of-code-2025">code</Link>
        ). I also put together a{" "}
        <Link href="/#/writeups/advent-of-code-2025">small writeup</Link>{" "}
        explaining my thought processes.
      </Body>
    ),
    bodyVerbose: (
      <Body>
        <Link href="https://adventofcode.com/">Advent of Code</Link> is an
        annual programming puzzle advent calendar that gets more difficult as it
        progresses &ndash; it's super cool and you should absolutely check it
        out if you don't already know what it is. I did part of it in 2024 but
        didn't stick with it, but this year I managed to push through all the
        problems (I'm happy about this, if you couldn't tell). I also managed to
        place first in a private leaderboard with coworkers, so that's also
        neat. I wrote my{" "}
        <Link href="https://github.com/Fisik343/advent-of-code-2025">
          solutions
        </Link>{" "}
        in Python and put together a{" "}
        <Link href="/#/writeups/advent-of-code-2025">small writeup</Link>{" "}
        explaining my thought processes.
      </Body>
    ),
  },
  {
    title: "Semantic Similarity Benchmarking (a Side Quest at my Job)",
    date: "October 2025 (Ongoing)",
    body: (
      <Body>
        Benchmarked various language models for semantic similarity matching of
        long texts from a specialized scientific domain. Tested various
        transformer models as well as word2vec as a baseline. Downstream usage
        of model will be compute-limited, so resource consumption was also a
        factor in model selection/benchmarking. Breaking conventional best
        practices to improve empirical results given the problem constraints.
      </Body>
    ),
    bodyVerbose: (
      <Body>
        This one is proprietary, so forgive me for speaking in generics. Long
        story short, I'm trying to match a set of long documents from a
        specialized scientific domain to another set of long documents in the
        same (or close enough) domain. Here, "long" just means longer than a
        typical model's context window, so for BERT models, longer than 512
        tokens. The actual task ends up being a regression problem
        (vectorization) that boils down to a classification/ranking problem
        (document matching). Up to this point, I've benchmarked about a dozen
        different transformer language models, comparing against Google's
        pretrained word2vec model as a baseline. The eventual deployment is
        looking like it will be a compute-limited environment, so everything
        needs to be able to run quickly on a CPU. Given the problem constraints,
        there have been a handful of times where I've had to look "conventional
        wisdom" square in the eyes and go "yeah, you don't apply here". That is
        to say that there have been several times throughout the benchmarking
        process where I've found that deviating from general NLP best practices
        ends up improving empirical results for the particular problem I'm
        solving.
      </Body>
    ),
  },
  {
    title: "AI Red Teaming",
    date: "June 2025 (Ongoing indefinitely)",
    body: (
      <Body>
        I break AI for sport. I've competed and placed 5<sup>th</sup>, 6
        <sup>th</sup>, and 19<sup>th</sup> in various{" "}
        <Link href="https://www.hackaprompt.com/">HackAPrompt</Link>{" "}
        competitions. I also won 15 of 27 shortest prompt awards in
        HackAPrompt's competition targeting agentic AI &ndash; check out my{" "}
        <Link href="#/writeups/mats-x-trails">writeup</Link> explaining my
        jailbreaking process.
      </Body>
    ),
    bodyVerbose: (
      <>
        <Body>
          I break AI for sport (and money, I've won just under $3,500 from
          competitions so far). I started jailbreaking AI in June 2025 with{" "}
          <Link href="https://www.hackaprompt.com/">HackAPrompt's</Link> CBRNE
          competition. I joined about halfway through the event and placed 19
          <sup>th</sup> &ndash; not a terrible start, and I won a bit over $100
          from the proportional jailbreaks pool. Shortly after, I competed in
          HackAPrompt's Hawaiian Havoc competition which focused on virology and
          biological warfare. I placed 5<sup>th</sup>! Not enough to win any
          prize money in this event, but it was still a decent placement. Then
          came along HackAPrompt's MATS x Trails competition, focusing on
          tricking agents into performing malicious actions. I placed 6
          <sup>th</sup> which was a prized placement on the leaderboard!
          Somewhat more importantly, I found some really fun edge cases, enough
          to win 15 of the 27 shortest prompt awards in the competition. Check
          out my <Link href="#/writeups/mats-x-trails">writeup</Link> explaining
          my jailbreaks and thought process.
        </Body>
        <Body>
          In the mix of HackAPrompt events, I also tried my hand a bit at the{" "}
          <Link href="https://app.grayswan.ai/arena">Gray Swan Arena</Link>,
          another AI red teaming competition platform. For the most part, I
          poked at the Proving Ground weekly arena a couple times, but I figured
          that I would be better off devoting almost all my efforts toward doing
          well in whichever HackAPrompt event was going on at the time instead
          of splitting my time and doing just alright across multiple
          competitions. I recently participated in the Gray Swan
          Machine-in-the-Middle event which involved using coding agents to hack
          into vulnerable systems. I managed to get on the leaderboard for one
          of the waves, but my lack of traditional cybersecurity experience was
          working against me here. It ended up being a fantastic learning
          experience though!
        </Body>
      </>
    ),
  },
  {
    title: "Web Application Development (aka My Current Job)",
    date: "August 2023 (Ongoing)",
    body: (
      <Body>
        Contribute to client-facing web application with complex financial and
        organizational business logic using TypeScript, React, SQL, and Java.
        Occasionally create utilities for team members using PowerShell. Use
        Playwright to perform end-to-end tests of application. Occasionally demo
        the features I've developed to the client. Analyze and optimize code,
        reducing data access times by up to 90% in some cases. Conduct code
        review for peers to proactively identify bugs, performance bottlenecks,
        and security vulnerabilities.
      </Body>
    ),
    bodyVerbose: (
      <Body>
        I can't get super into the weeds here about exactly what the application
        I work on does, but I can talk about what I do a bit! It's a web
        application with fairly complex organizational and financial business
        logic. Working on front-end and back-end development of this application
        is my main role, and languages/frameworks used are TypeScript, React,
        SQL, and Java. Occasionally, I'll demo the features I've built to the
        client, though more often than not someone else is demoing all the
        team's features from a given sprint. I also sometimes write utilities
        for the team in PowerShell. Very much not a frequent thing, but always
        happy to write a util. I also coordinated between the dev team and
        automation tester to get the needed test locators in the application.
        And I also wrote some test scripts using Playwright and helped stand up
        the initial testing repo + utilities. I still help debug the tests from
        time to time &ndash; it's kind of a fun break from my normal day-to-day.
        In addition to developing features, I'll analyze and optimize code,
        often targeting data access times (in some cases achieving a 90%
        reduction) and inefficient rendering. Lastly, I also do code review! I
        proactively identify bugs, performance bottlenecks, and security
        vulnerabilities. Like that time I found that I could easily crash one of
        my coworker's new microservices just from using the UI. Yes, the same UI
        that end users would see, I wasn't doing anything fancy nor sending an
        unreasonable amount of requests. There was just a way to send null data
        which triggered an unhandled exception. Yeah... yikes.
      </Body>
    ),
  },
  {
    title: "Hotel Night Audit Automation",
    date: "May 2023 - July 2023",
    body: (
      <Body>
        Used Python to automate paperwork aggregation performed during night
        audit shift at a hotel. Additionally programmed keyboard macros to
        vastly speed up repetitive property management system (PMS) functions.
        In total, reduced 4-5 hours of nightly tasks to 30-45 minutes.
      </Body>
    ),
    bodyVerbose: (
      <Body>
        Between grad school and starting a corporate job, I still had rent to
        pay. So I got a job as a night auditor at a hotel in the town I was
        living in at the time. In addition to handling guests and making sure
        the place didn't burn down (quite literally in one case), I was
        responsible for running all the nightly business processes to ensure
        that everything from the previous day was taken care of and that
        everything was ready for the next day. One of the most tedious, awful
        parts of this was printing like fifty pages of documents that you had to
        track down and then manually sorting them into one packet, scanning them
        back into the computer, re-sorting to a different packet for a different
        use case, scanning back into the computer, and then sorting yet again to
        make a third packet to scan back in. Oh, then they all had to be printed
        again with the scans uploaded to a shared folder. Eww. Screw that. So I
        wrote a program that just takes PDFs of the individual documents and
        puts together the three packet files. Not the most impressive feat, but
        it saved me so much time each night. The property management system
        (PMS) was also old, clunky, and required like a dozen clicks to do a
        simple task. A coworker and I figured out all the keyboard shortcuts and
        I wrote keyboard macros to turn these awkward, clunky user interactions
        into a single button press. This was insanely useful for the different
        processes that required us to process each guest's information
        individually. From all the small changes I made to automate parts of the
        work, what was originally a 4-5 hour job each night turned into 30-45
        minutes of work.
      </Body>
    ),
  },
  {
    title: "Computer Vision Demos",
    date: "January 2023, May 2025",
    body: (
      <Body>
        Created a suite of{" "}
        <Link href="https://github.com/Fisik343/computer-vision-demos">
          computer vision demos
        </Link>{" "}
        for students to reference and use as starter code. Demos include simple
        face detection, multithreaded face detection for hardware-constrained
        systems, motion detection via adaptive background subtraction. Added
        another demo for face landmark detection in May 2025.
      </Body>
    ),
    bodyVerbose: (
      <Body>
        Throughout teaching, I had to write a bunch of starter code and examples
        for students to help illustrate concepts and provide a foundation for
        projects. In 2023, I decided to pull a handful of the{" "}
        <Link href="https://github.com/Fisik343/computer-vision-demos">
          computer vision demos
        </Link>{" "}
        I wrote together. It started off as basic face localization via Haar
        cascade classifiers and motion detection via adaptive background
        subtraction. At the time, I was planning projects to be run on
        hardware-constrained systems, notably Raspberry Pis on humanoid robots.
        Okay, okay, it wasn't the most resource-limited environment but the
        robots were very much not well-optimized with a lot of background
        processes running so video processing was still limited to a handful of
        frames per second at most. As a result, I made a multithreaded version
        of the face localization. The main thread ran just the video stream and
        a worker thread did the actual frame processing and simulated a resource
        intensive action that occurs after face detection (it just sleeps for
        now, you can put whatever you want there). In 2025 I added face landmark
        localization to the single-threaded version to round out the demos a bit
        more.
      </Body>
    ),
  },
  {
    title: "Homography for Bird's-Eye View",
    date: "Fall 2022",
    body: (
      <Body>
        Used MATLAB to generate bird's-eye views of a room given images taken
        from two cameras. Additional steps along the way include projecting 3D
        points to 2D pixel locations given camera parameters, using 2D points
        from both cameras to recover 3D points via triangulation, use
        triangulation to measure different objects in the room, computation of
        fundamental matrix from camera parameters, estimation of fundamental
        matrix via eight-point algorithm, quantitative evaluation of errors for
        estimated fundamental matrix.
      </Body>
    ),
    bodyVerbose: (
      <Body>
        Given two images and the cameras' parameters, I was tasked with
        understanding the 3D space of the room the cameras were in. First, I
        projected some known 3D points into 2D pixel locations. The cameras were
        in a motion capture studio, so it was convenient to just happen to have
        accurate 3D points. After projecting the 3D points to 2D pixel locations
        and performing a visual sanity check, the next task was to use
        triangulation to recover the 3D points and then compute errors as
        Euclidean distances between ground truth and triangulated positions.
        After making sure the triangulation was accurate, I selected points on
        the floor and walls to get their plane equations. I also measured things
        like the dimensions of a doorway, the height of a person in the room,
        and the 3D locations of other objects in the room. Lastly, my goal was
        to generate a bird's-eye view of the room. This required computing the
        fundamental matrix from the given camera parameters (yay, linear
        algebra). But what about the case where camera parameters are unknown? I
        used the eight-point algorithm to estimate a fundamental matrix as well.
        Using both of these fundamental matrices, I was able to warp the
        original images into top-down views of the room. The results were pretty
        good and, as expected, the results from the computed fundamental matrix
        were better than those of the estimated matrix. This was a course
        project, so I was required to use MATLAB even though this seems just as
        easy if not easier to do in Python. Oh well, it's all the same theory so
        the language doesn't particularly matter.
      </Body>
    ),
  },
  {
    title: "Relating Quantified Asymmetry to Taiji Skill",
    date: "Spring 2022",
    body: (
      <Body>
        Computed spatial, temporal, and spatiotemporal asymmetry in 3D joint
        positions and foot pressure maps from Taiji performances. Used t-tests
        to check for statistically significant differences in per-joint and foot
        pressure asymmetry between different skill groups of Taiji performers.
        Invalidated hypothesis that greater skilled groups would exhibit less
        asymmetry. Additionally generated projected foot pressure motion
        textures for downstream use. Language used was MATLAB due to data format
        and reliance on existing MATLAB-based utilities.
      </Body>
    ),
    bodyVerbose: (
      <>
        <Body>
          You wanna see what 140 hours of work crammed into 9 days looks like?
          No? Well I'm gonna tell you about it anyway. Long story short, I had
          access to 3D joint positions and foot pressure data from 10 people
          performing{" "}
          <Link href="https://en.wikipedia.org/wiki/24-form_tai_chi">
            24-form Taiji
          </Link>{" "}
          multiple times each, 87 performances in total. My graduate advisor
          thought that more skilled performers would exhibit more symmetry in
          their motion, so I went about trying to find out if this was true or
          not.
        </Body>
        <Body>
          To do this, I first identified different forms in 24-form Taiji that
          should exhibit spatial, temporal, and/or spatiotemporal symmetries. I
          then reduced the dataset to be just the frames I needed. I then
          normalized all the data, including ensuring all joint position data
          was in a local coordinate system instead of global and resampling some
          of the spatiotemporal symmetry locations to have a uniform number of
          frames. I then computed asymmetry on a per-joint, joint group, foot
          pressure, and timing basis across all relevant forms and form
          transitions. The specific metrics I used were Euclidean distance for
          individual joints, mean Euclidean distance for joint groups, one minus
          intersection over union for foot pressure, and one minus ratio of
          timings for timing asymmetry. With all these calculated, I was able to
          then do a pairwise comparison across performers using unpaired
          t-tests, but I found that I didn't have enough statistical power to
          draw conclusions this way. So I grouped performers together into
          beginner, intermediate, and experienced skill groups. Several hundred
          t-tests and loads of graphs later, I was able to conclude that there
          is no reliable way to relate asymmetry to skill in 24-form Taiji
          performance (at least with the data available to me).
        </Body>
        <Body>
          There were also a couple utilities I wrote along the way that weren't
          directly used but were designed to support extensions of this
          research. For example, I generated foot pressure motion textures
          projected along the x- and y-axes for downstream frieze pattern
          detection. I just didn't have enough time to implement the detection
          myself prior to a deadline &ndash; I had a paper and presentation to
          put together too. Due to the data format and reliance on some existing
          utilities, the language used for all this was MATLAB. To be honest,
          that's about as good of a high-level overview as I can give. If you
          want more detail, just ask me for the original paper I wrote (12 pages
          + 26-page appendix).
        </Body>
      </>
    ),
  },
  {
    title: "Load Balancer Performance Simulation",
    date: "Fall 2021",
    body: (
      <Body>
        Load balancer performance simulation framework written in C++. Core
        simulator consisted of discrete event generators following various
        distributions, task dispatch systems with a handful of policies, queue
        networks, a variety of scheduling policies for the individual task
        queues, and servers which had fixed or variable performance models (see
        the detailed version for the list of distributions and policies).
        Simulator also collected mean latency, tail latency, and throughput
        info.
      </Body>
    ),
    bodyVerbose: (
      <>
        <Body>
          So it turns out that when you have a lot of servers, you get a lot of
          headaches. You need to figure out which server to send a job to, and
          then once it reaches the server you also have to figure out what order
          to handle it in. And you've also got a bunch of different sized jobs
          coming in at different intervals. Yeah, headaches. For a graduate
          course on performance evaluation, I implemented a framework in C++ for
          simulating different server farm and load balancer configurations.
        </Body>
        <Body>
          First, I needed some way to generate random values according to a
          handful of distributions. Implemented distributions were deterministic
          (no randomness), exponential distribution, a sum of distributions, and
          a random mixture of distributions. Next, I needed a simulated stream
          of requests which could follow either an open-loop or closed-loop
          sequence. After that, it was time to put in place a basic queue
          network and task dispatch policies to send the requests from a stream
          to the different queues. I implemented the following dispatch
          policies: random, round-robin, least work left, join shortest queue.
          Then there were the actual queues themselves. There are so many
          different kinds of queues, but the queueing policies I implemented
          were random, foreground-background, first-in-first-out (FIFO),
          last-come-first-served, processor sharing, shortest job first,
          preemptive shortest job first, and shortest remaining processing time.
          I also implemented a central FIFO queue with variable number of
          servers &ndash; this doesn't fit in with the immediate dispatch
          framework but is still an important architecture. The servers that the
          jobs were queued on could also have fixed processing rates or
          processing rates determined by a distribution. Lastly, I made sure to
          add code to collect statistics on the average latency, the tail
          latency, and throughput of the entire system. Whew, not a ton of
          individual moving parts, but a bunch of different combinations to try
          out.
        </Body>
      </>
    ),
  },
  {
    title: "Multimodal Taiji Pose Classification",
    date: "Summer 2021 - Summer 2023",
    body: (
      <Body>
        Used Python and MATLAB to benchmark traditional and deep learning
        methods for pose classification task on multimodal{" "}
        <Link href="https://en.wikipedia.org/wiki/24-form_tai_chi">
          24-form Taiji
        </Link>{" "}
        data. Data modalities used were multi-view video, foot pressure, and 3D
        motion capture. Developed data pre-processing utilities, learning
        pipelines, and scripts for analysis, visualization, and aggregation of
        results.
      </Body>
    ),
    bodyVerbose: (
      <>
        <Body>
          Long story short, I used Python and MATLAB to introduce a baseline for
          a new pose classification task on multimodal{" "}
          <Link href="https://en.wikipedia.org/wiki/24-form_tai_chi">
            24-form Taiji
          </Link>{" "}
          data using both traditional machine learning approaches as well as
          deep learning methods. The task itself was to classify frames of data
          as belonging to a particular Taiji form (or subform) or as not
          belonging to any form. The PI of the lab labeled frame numbers for all
          the subforms for each take, and a frame was considered to be part of
          the form/subform if it fell within a fixed window before or after the
          labelled frame. The work on this task was not completed in the order
          I'm going to describe, it was a lot more chaotic with trying new
          things as I came up with them. Starting with the data, the raw data I
          had access to was multi-view video, foot pressure (ground truth and
          predicted), and 3D motion capture joint positions. These were all
          temporally aligned. From the multi-view video, I also had triangulated
          3D{" "}
          <Link href="https://github.com/CMU-Perceptual-Computing-Lab/openpose">
            OpenPose
          </Link>{" "}
          positions. All of this data was collected and aligned from a prior
          student's dissertation work. About a year and a half into my project,
          I got access to the motion capture joint rotation matrices, but these
          weren't temporally aligned with the rest of the data, so I had to do
          that. I already had the known offsets for the joint positions, so it
          was fairly trivial, just a minor annoyance.
        </Body>
        <Body>
          There was a bunch of data normalization that went into this. The joint
          positions were all in a global coordinate system, but to make the data
          applicable to data in the wild instead of just this one particular lab
          setup, a local coordinate system was needed. It's possible that there
          are scenarios where the direction of gravity is known for a scene, so
          body position was made local in two different ways: fully local as
          well as local x- and y-axes with a global z-axis. Similarly, the joint
          rotation data was all global as well so each joint rotation matrix had
          to be made relative to the prior joint in the body tree. There are
          also a bunch of different ways to represent rotations: rotation
          matrices, Euler angles, quaternions, 3D and 4D axis-angle, etc. The
          foot pressure was relatively high dimension data relative to the joint
          data, so I tested different levels of downsampling. The foot pressure
          maps aren't perfectly rectangular so downsampling involved decomposing
          into force and area maps, downsampling those, then recombining into
          the appropriate pressure values. There's also choosing whether to pad
          out the area to have dimensions of a power of 2 for downscaling or to
          scale with bilinear interpolation as well as determining whether to
          use a box filter or gaussian filter and the window size for each
          filter. So many different combinations of possible preprocessing to
          figure out which would work best. Oh, and then I also wanted velocity
          and acceleration (and whatever the pressure counterparts would be) so
          I computed approximations using various temporal window sizes.
        </Body>
        <Body>
          Now let's get into the fun part, the actual machine learning pipeline.
          The dataset was made up of performances from 10 different performers,
          so for the cross-validation splits, I left one subject out as test
          data to best mimic an entirely unseen subject from data in the wild.
          The training data had feature selection performed on it, first a
          filter method optionally followed by a wrapper method. Due to the
          number of features, using solely a wrapper method was infeasible. I
          can't remember exactly which all filter methods were tested but a lot
          of early experiments involved{" "}
          <Link href="https://www.ri.cmu.edu/pub_files/pub4/liu_yanxi_2002_1/liu_yanxi_2002_1.pdf">
            Augmented Variance Ratio (AVR)
          </Link>{" "}
          and{" "}
          <Link href="https://en.wikipedia.org/wiki/Minimum_redundancy_feature_selection">
            Minimum Redundancy Maximum Relevance (mRMR)
          </Link>
          . The wrapper methods used were sequential forward selection and
          sequential backward selection. For the tabular data, the traditional
          classifiers used were LDA, QDA, KNN, random forests, ECOC SVM, and
          XGBoost. Each of these had their parameters tested heavily in grid
          search fashion if applicable. A handful of different neural network
          architectures were tested but most notably there was a small MLP and a
          ResNet. For the video data the following models were used: I3D, X3D,
          SlowFast. Once trained on the training data, the models were run on
          the test data and various metrics were collected, aggregated, and
          visualized.
        </Body>
        <Body>
          That's pretty much the gist of it. This work was never published. I
          don't particularly care enough to publish this. It's from an
          absolutely horrid time in my life and revisiting it just to wrap it up
          sounds like a mistake. Especially with how fast the field works, most
          of this was already outdated by the time I stopped working on it.
        </Body>
      </>
    ),
  },
  {
    title: "Q-Learning for Maze Solving",
    date: "Spring 2021, Spring 2022",
    body: (
      <Body>
        Implemented traditional and deep Q-learning for solving a maze in Python
        and MATLAB. Guided undergraduate students through their own
        implementations of traditional Q-learning in Python in 2021. Guided
        graduate students through traditional and deep Q-learning variations in
        2022; students had the choice of using Python or MATLAB.
      </Body>
    ),
    bodyVerbose: (
      <Body>
        I used Python to write an implementation of Q-learning for solving a
        maze, including heatmap visualizations of where the agent spent its time
        in the maze on a batch of runs (or single run, that's just batch size of
        1). I later rewrote this as deep Q-learning instead of just traditional,
        and I also ported the implementations over to MATLAB as well. In 2021, I
        guided undergraduate students through their own implementations of
        traditional Q-learning for solving mazes in Python. In 2022, I guided a
        much larger batch of graduate students through implementing both
        traditional and deep Q-learning for maze solving. The graduate students
        could choose whether to implement in Python or MATLAB (hence the MATLAB
        port I wrote).
      </Body>
    ),
  },
  {
    title: "Head Mesh Comparison",
    date: "Spring 2021",
    body: (
      <Body>
        Used Python to write utilities for comparing ground truth 3D head scans
        to avatars generated from images, supporting biomedical research. This
        involved aligning the compared meshes, resampling them using cylindrical
        and spherical coordinates at different levels of detail, then applying
        three point-wise difference metrics. Additionally used Open3D library
        for visualizations of mesh difference heatmaps.
      </Body>
    ),
    bodyVerbose: (
      <>
        <Body>
          A biomedical researcher had a question, "Is this tool I found that
          generates 3D head meshes from a single image accurate enough to use in
          my research?" I was assigned to him as essentially free labor for my
          university capstone project, and I knew of a way to get an answer for
          him. I was working with a small team of biomedical engineering
          students who didn't have any programming experience, so all the code
          fell on me. I had the rest of the team collect 3D scans of some
          people's heads (using themselves to start) as well as generate the 3D
          avatars so that I could compare the meshes. To make sure hair didn't
          affect the 3D scans too much, scanned subjects wore a swim cap. First,
          I aligned the meshes based on some key landmarks (points on the eyes,
          nose, and mouth). With the meshes aligned, I wrote a utility to
          resample the meshes using cylindrical and spherical projections at
          different resolutions or levels of detail. To prevent having lots of
          points cluster around the poles with the spherical projections, I used
          an icosphere instead of a UV sphere for the projection. Once I had
          aligned meshes with identical resamplings, I compared them using
          height difference, orientation difference, and sampled Hausdorff
          distance metrics. For each mesh, resampling, and metric combination I
          had distance distributions that I could use to quantify the overall
          difference in the meshes. I also wrote a visualization tool that
          showed the per-vertex distance values as a heatmap on the 3D meshes
          using the Open3D library.
        </Body>
        <Body>
          All code was written in Python to make it easier for the rest of the
          team to understand, but C/C++ would have been my personal pick for the
          task given how long some of this took to process in pure Python.
        </Body>
      </>
    ),
  },
  {
    title: "Thread Scheduler",
    date: "Fall 2020",
    body: (
      <Body>
        Wrote a CPU thread scheduler in C. Implemented first-come first-served,
        shortest remaining time first, preemptive priority-based, and
        multi-level feedback queue scheduling algorithms. Benchmarked and
        compared all algorithms against each other for various process,
        priority, and timing configurations.
      </Body>
    ),
    bodyVerbose: (
      <Body>
        I used C to write a CPU thread scheduler. Learned a lot about mutex
        locks and semaphores along the way (mostly through painful trial and
        error). Long story short, I implemented first-come first-served,
        shortest remaining time first, preemptive priority-based, and
        multi-level feedback queue scheduling algorithms. It all boiled down to
        a lot of queueing with some extra steps and ensuring that data wasn't
        lost during preemption. I then put together some test/debug data to
        benchmark the different algorithms against each other in different
        circumstances.
      </Body>
    ),
  },
  {
    title: "Distributed Conway's Game of Life",
    date: "Fall 2019",
    body: (
      <Body>
        C implementation of{" "}
        <Link href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
          Conway's Game of Life
        </Link>{" "}
        using Intel MPI to distribute processing of large world spaces across
        multiple nodes in a cluster. Evaluated number of cell updates per second
        and percentage of total time spent sending data between nodes as
        functions of number of nodes and world size up to a maximum of 1
        trillion cells distributed across 100 nodes. Performance evaluations
        taken for both linear and Cartesian decompositions.
      </Body>
    ),
    bodyVerbose: (
      <Body>
        I had written an implementation of{" "}
        <Link href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
          Conway's Game of Life
        </Link>{" "}
        before, but that was running a small world locally. What if I wanted to
        crank it up a notch and simulate 1 trillion cells across a cluster?
        Well, I went about figuring out how I could do that using C and Intel
        MPI. The crux of the problem was chunking out the world space across the
        different nodes in the cluster and coordinating what happens at the edge
        of each chunk. Oh, and doing this while avoiding deadlock. To avoid
        deadlock for a linear network I ended up having even-numbered nodes
        coordinate with the node to their "left" first and then the "right", and
        odd-numbered nodes did the opposite ("right" then "left"). For a
        Cartesian network, I extended the same principle to the two axes and
        then the four corners. Once the code was working properly (tested for
        correctness with gliders near boundaries for a starting state), I
        started collecting timing metrics to see how world size and number of
        nodes in the network affected performance in both linear and Cartesian
        networks. The two metrics I collected were number of cell updates per
        second and percentage of total runtime spent sending messages between
        nodes. The more processors you have, the faster you can process cell
        updates, but you also incur more networking overhead. Additionally the
        larger the world size is, the more time you spend updating cells
        relative to performing networking, so you're able to process more cells
        per second on average.
      </Body>
    ),
  },
  {
    title: "Ray Tracer",
    date: "Fall 2019",
    body: (
      <Body>
        Simple ray tracer written in C++ using OpenMP for parallelism. Rendering
        support included spheres, triangles, texturing, ambient light, point
        lights, shadows, reflection, refraction, anti-aliasing, multi-frame
        animation. This was a course project that I later guided other students
        through as a TA.
      </Body>
    ),
    bodyVerbose: (
      <Body>
        Holy math, Batman! This was a CPU-based ray tracer that I wrote using
        C++ and parallelized using OpenMP to speed up the rendering process. I
        started off by parsing a file that described the scene (duh, it'd be
        pretty boring having a single hardcoded scene), and then implemented ray
        projection from the camera. Next up was ray intersection with spheres
        and triangles using ambient light and the object's diffuse color to get
        pixel color. A logical next step was to finish the lighting, adding in
        point lights and specular shading. This also included ensuring shadows
        appeared properly if there was an object blocking the path between a
        light and a surface point. The objects were fairly boring being a solid
        color, so adding texture mapping was next on the to-do list. With the
        bulk of the basics done, it was time to add reflection and refraction
        which was probably the most annoying math in the whole project,
        particularly figuring out whether a ray was entering or exiting an
        object for refraction. This also introduced an element of recursion, so
        I added a maximum recursion depth to prevent infinitely long runtimes.
        To round out the project, I added MSAA and multi-frame animations.
      </Body>
    ),
  },
  {
    title: "Rollercoaster Simulation",
    date: "Fall 2019",
    body: (
      <Body>
        Created a 3D rollercoaster simulation using C++ and OpenGL. The track
        was generated around a B-spline. Implemented track following and free
        camera modes. Track following camera mode obeyed conservation of energy
        ignoring friction. Also included imported assets, wrote multiple shaders
        (some for debugging), and added handling for different light source
        types. This was a course project that I later guided other students
        through as a TA.
      </Body>
    ),
    bodyVerbose: (
      <>
        <Body>
          This was a 3D rollercoaster simulation written in C++ using OpenGL for
          the graphics. The track geometry followed a B-spline that I designed
          using reusable control point chunks. There were also a couple tricks
          required to ensure that the twist of the track around the spline lined
          up at the start and end points. There was a free camera mode where you
          could fly around the scene to observe it, and then there was the
          rollercoaster camera mode where the camera followed a path slightly
          above the track. The speed of the camera was a function of its current
          height, balancing kinetic and potential energy to ensure none was lost
          (yes, this means I ignored friction). There were also imported assets,
          a couple different shaders, and different light sources, but they
          didn't really play into the core functionality of the program &ndash;
          they just made it a bit prettier.
        </Body>
        <Body>
          This was a course project, and I ended up being part of the teaching
          team for this course in two future semesters. So, I also got to guide
          students through loads of different problems they ran into during the
          creation of their own projects, some of which I hadn't run into
          myself.
        </Body>
      </>
    ),
  },
  {
    title: "Cloud-Based Simulation of Smart Device Hubs",
    date: "Summer 2019",
    body: (
      <Body>
        Simulated smart device hubs (linux devices), user actions, and network
        traffic between connected smart hubs and their connected devices. Used
        Docker to containerize the simulations, and used Kubernetes (k8s) to
        orchestrate and network the simulations together. The Dockerfiles and
        k8s YAML were templated, and I wrote a utility to generate them from
        higher-level descriptions of the desired simulations/tests. All
        simulations were deployed on AWS EC2 instances.
      </Body>
    ),
    bodyVerbose: (
      <>
        <Body>
          Consider a scenario where you have a bunch of smart device hubs that
          are placed throughout a building. These hubs are all networked
          together, and each one controls some number of smart devices. How on
          earth do you test how well a full building's worth of these hubs
          behave after hardware or firmware changes or testing compatibility
          between different device versions? That's right, you build a big test
          bench with a few dozen hubs and see how they behave! Except that's
          incredibly expensive and you run into issues like wireless
          interference and taking a whole day or two away from an engineer to
          set everything up. What if there was a better way?
        </Body>
        <Body>
          Hi, that's where I came in. My job was to take a half-baked, outdated
          simulation of one of these hubs, update it, flesh out the missing
          functionality, containerize the simulation, and set up a cluster of
          these simulations in the cloud. Long story short, I wrote a handful of
          bash scripts to simulate user/device actions, a Dockerfile template, a
          Kubernetes deployment YAML template, and tools to generate Dockerfiles
          and Kubernetes files based on a higher-level description of the
          desired simulation configuration (number of hubs running each firmware
          version, types of leaf-node devices, etc.). All simulations were run
          on AWS EC2 instances. I also got to shoot down the idea a manager had
          to run a massive weekend-long scale and stress test of this framework
          before it was optimized. When he saw that it would cost nearly his
          annual salary based on some napkin math, he was happy to scrap the
          idea.
        </Body>
      </>
    ),
  },
  {
    title: "HTTP Proxy Server",
    date: "Spring 2019",
    body: (
      <Body>
        Used C to write an HTTP proxy server. Handled memory safety, streaming
        data in chunks, and various errors to prevent crashes. Also added a
        cache for recently accessed resources so repeated requests would fetch
        directly from cache instead of forwarding the request.
      </Body>
    ),
    bodyVerbose: (
      <Body>
        Sockets, buffers, and signals, oh my! I wrote an HTTP proxy server in C
        which was a steep learning curve for socket programming, efficient and
        safe memory management, and handling various errors to avoid crashing.
        It also had a cache, so multiple repeated requests for the same resource
        would return data from the cache instead of forwarding the request. It
        was only single-threaded, so it's not particularly well-suited for a
        production setting. But for tinkering around, it was fun and
        educational.
      </Body>
    ),
  },
  {
    title: "Mobile Support for Commercial Web Application",
    date: "Summer 2018",
    body: (
      <Body>
        Designed and implemented tablet and mobile interfaces for a commercial
        web application which only had desktop support. To avoid affecting the
        desktop version (a hard requirement), queried the user's device and
        served appropriate version of the front-end code. Tech stack involved
        was jQuery, Backbone.js, and Handlebars.js with a small SASS setup for
        customizing Bootstrap. Used Grunt as a task runner.
      </Body>
    ),
    bodyVerbose: (
      <>
        <Body>
          Oh hey it's my first internship! The company I interned with had a web
          application accessible to commercial clients, but it only had desktop
          support. My job was to add support for mobile devices (phones and
          iPads, we didn't really care about Android tablets). We didn't want to
          affect the desktop version of the site, so I designed and implemented
          a second, responsive version of the site specifically for smaller
          screens. Based on the device we detected the user was on, we served
          the appropriate version of the front-end code. In addition to doing
          some bugfixes, I was able to finish reworking about half of the site.
          A funny story is that the outsourced front-end developer ended up
          leaving while I was there, so for a short period of time I was the
          only front-end person. That was fun (and slightly scary for
          18-year-old me).
        </Body>
        <Body>
          From a technical standpoint, the application was a C# backend that I
          didn't interact much with, and the front end used jQuery, Backbone.js,
          and Handlebars.js with a small SASS setup for styling as well as Grunt
          as a task runner. Kind of neat to look back on this and see just how
          different the web landscape is these days.
        </Body>
      </>
    ),
  },
  {
    title: "Flappy Bird Clone",
    date: "Spring 2017",
    body: (
      <Body>
        Used my own game engine to write a Flappy Bird clone in Java with
        smoother movement and an additional game mechanic to increase
        difficulty. Also added Xbox controller support via XInput library.
      </Body>
    ),
    bodyVerbose: (
      <Body>
        What programming newbie didn't make a Flappy Bird clone back in the
        mid-to-late 2010s? I made my own version of it using my 2D Game Engine,
        mostly as a sanity check to make sure I could actually build something
        with it when it was almost done. I actually kind of hated how clunky the
        movement felt in the original game, so I made it smoother and a bit
        faster. I also added a mechanic where you needed to use the arrow keys
        on your keyboard to change the color of your character to match the
        color of a set of pipes in order to be able to pass between them to add
        a bit more challenge. Oh, and I also added Xbox controller support via
        the XInput library, but I can't remember if I ever put that into the
        game engine or not.
      </Body>
    ),
  },
  {
    title: "2D Game Engine",
    date: "Fall 2016 - Summer 2017",
    body: (
      <Body>
        Wrote a basic 2D game engine in Java using LWJGL. The core engine
        contained a window manager, renderer, game loop, audio system, and input
        handler. Also added optional utilities for menu UI and inventory
        management. Additionally documented all code/functionality.
      </Body>
    ),
    bodyVerbose: (
      <>
        <Body>
          I made a basic 2D game engine in Java using LWJGL. It was fairly
          small, consisting of a window manager, renderer, main game loop, audio
          system, and input handler. I also later added utilities for menu UI
          and inventory management. This was some of the first library code I
          wrote, and I had to learn how to document my code as well as provide
          examples. I made lots of mistakes along the way (more than I can
          count), but also a great learning experience.
        </Body>
        <Body>
          For some background on the need/origin for this project, I made a
          handful of small games in a programming class and wanted a reusable
          foundation that I could keep building off of. I also needed a high
          school senior project at the time and wanted to start learning OpenGL,
          so it ended up working out nicely in several ways!
        </Body>
      </>
    ),
  },
  {
    title: "Pong Remake",
    date: "Sometime in 2015 or 2016, I can't remember exactly",
    body: (
      <Body>
        Used C++ to remake the classic game, Pong, for Windows. This was one of
        my first "real" programming projects (whatever that means).
      </Body>
    ),
    bodyVerbose: (
      <Body>
        Back when I was learning C++ I wanted to figure out how to render to a
        window instead of being stuck in a terminal (I came from a background of
        Visual Basic, visuals were important to me). I decided the best way to
        do this was to remake the classic game, Pong. If I recall properly, I
        ended up using some clunky software rendering setup and the code was
        pretty terrible. It might not have been great, but it was fairly simple
        and a great stepping stone for me at the time.
      </Body>
    ),
  },
];

function Timeline() {
  const [reverse, toggleReverse] = useReducer((state) => !state, false);
  const [verbose, toggleVerbose] = useReducer((state) => !state, false);
  const displayData = reverse ? timelineData.slice().reverse() : timelineData;

  return (
    <Page>
      <Header>Timeline</Header>
      <Body>
        Here's some stuff I've worked on that I totally don't frequently forget
        about and need to write down. I mean, who forgets they worked on
        something until it just happens to be relevant to a conversation years
        after completing the work? Couldn't be me. Though if you ask others, I
        totally did forget about some of this and will just wildly pull "oh yeah
        I did something similar once" out of nowhere from time to time. But I
        think I've got mostly everything here now! Well, excluding a fair bit of
        coursework &ndash; I only kept some of the larger or more interesting
        projects. There's also some timing overlap between some of these, so the
        exact ordering might be a bit off.
      </Body>
      <Body>
        Also, you might be wondering why a fair bit of this doesn't have code
        associated with it. Quite simply, some of it is proprietary, some of it
        is related to unpublished research, some of it was coursework that I
        don't want to publish exact solutions to, and some of it just got lost
        to the sands of time. Which is a weird thing to say when I'm hardly
        "old" by most standards.
      </Body>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <FormControlLabel
          control={<Switch checked={verbose} onChange={toggleVerbose} />}
          label="Show detailed (verbose) versions"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Button
          variant="contained"
          onClick={toggleReverse}
          sx={{ padding: 0.75, minWidth: "unset" }}
        >
          <SwapVertIcon />
        </Button>
        <Body>
          Currently ordered {reverse ? "oldest to newest" : "newest to oldest"}
        </Body>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {displayData.map((item) => (
            <Box
              key={item.title}
              sx={{
                width: "100%",
                display: "flex",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  flex: 0,
                  width: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "secondary.main",
                    width: "16px",
                    minHeight: "16px",
                    borderRadius: "50%",
                    flex: 0,
                    marginTop: "8px",
                  }}
                />
                <Box
                  sx={{
                    backgroundColor: "white",
                    width: "2px",
                    flex: 1,
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <SubHeader align="left">{item.title}</SubHeader>
                <Typography variant="subtitle1" sx={{ color: "#bbbbbb" }}>
                  <em>{item.date}</em>
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {verbose ? item.bodyVerbose ?? item.body : item.body}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Page>
  );
}

export default Timeline;
