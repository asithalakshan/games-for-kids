import { React, useEffect, useState } from "react";
import add from "../Images/add.jpg";
import "../Pages/Home.css";

function Home() {
  return (
    <div>
      <div className="wrapper">
        <section></section>
        <section>
          <center>
            <div className="textnormal col mt-3 p-5">
              <center>
                <h3 className="hed mt-5">Is Video Game Addiction Real?</h3>
              </center>
              <center>
                <img
                  className="imgg"
                  src="https://www.therecoveryvillage.com/wp-content/uploads/2020/06/am-i-addicted-to-video-games.jpg"
                />{" "}
              </center>

              <p className="textnormal col mt-3 p-5">
                It's great to do what you love. But can you go too far with a
                hobby? And when does it become an addiction? This is the
                question that experts are trying to answer about video games.
              </p>
              <p className="textnormal col px-5">
                Although gambling has been around for almost 50 years, studies
                on its harms are still in its infancy. Different groups have
                come to different conclusions about whether playing sports
                should be called an addiction.Here's what you or someone close
                to you should look for - your partner, child, or friend.
                According to the criteria suggested in DSM-5, you should have
                five or more of these signs within 1 year of having a problem:
              </p>
              <ul className="mx-5 p-5">
                <li>Thinking about gaming all or a lot of the time</li>
                <li>Feeling bad when you can’t play</li>
                <li>
                  Needing to spend more and more time playing to feel good
                </li>
                <li>Not being able to quit or even play less</li>
                <li>Not wanting to do other things that you used to like</li>
                <li>
                  Having problems at work, school, or home because of your
                  gaming
                </li>
                <li>Playing despite these problems</li>
                <li>
                  Lying to people close to you about how much time you spend
                  playing
                </li>
                <li>Using gaming to ease bad moods and feelings</li>
              </ul>
              <center>
                <h3 className="m-4">Preventing a Gaming Problem</h3>
              </center>
              <p className="textnormal col px-5">
                To keep the amount of time spent gaming under control, try these
                tips for adults and kids alike:{" "}
              </p>
              <ul className="p-5 mx-5">
                <li className="mt-3">
                  Set time limits for play and stick to them.
                </li>
                <li className="mt-3">
                  Keep phones and other gadgets out of the bedroom so you won’t
                  play into the night.
                </li>
                <li className="mt-3">
                  Do other activities every day, including exercise. This will
                  lower the health risks of sitting and playing for long
                  stretches of time.
                </li>
              </ul>
              <p className="textnormal col px-5">
                No one knows if certain types of sports problems can cause
                sports to fail. For now, make sure your child only plays games
                that are rated according to their age.
              </p>
            </div>
          </center>
        </section>
      </div>
    </div>
  );
}

export default Home;
