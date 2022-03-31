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
                <h3 className="hed mt-5">Dangerous Online Games</h3>
              </center>

              <center>
                <h3 className="m-4">01.Roblox</h3>
                <img
                  className="imgg"
                  src="https://techcrunch.com/wp-content/uploads/2020/07/Lineup_All.jpg"
                />{" "}
              </center>
              <center>
                <h5 className="pt-3">What is Roblox ?</h5>
              </center>
              <p className="textnormal col mt-3 p-5">
                Roblox is a vast online platform where kids can create and
                interact in what its makers describe as "immersive 3D worlds."
                Players are given the opportunity to create an avatar (player)
                for themselves and allotted a small amount of digital money to
                rent a house. Money to furnish and decorate the house requires
                real world money, with costs adding up fast. A variety of
                different outfits are also available to purchase which is a huge
                drawcard for many young children who want to make their avatar
                look as cool as possible. Players who don’t buy upgrades may be
                mocked by other players and pressured into spending more.
              </p>

              <center>
                <h3 className="m-4">02.My Friend Cayla</h3>
              </center>
              <center>
                <img
                  className="imgg"
                  src="https://www.cnet.com/a/img/resize/5c54b7cf0dfd276b0b704d8cc8e6d70db12c8f0f/2016/12/07/b3486fdb-25cd-40ba-b83e-8b5aa695f35f/cayla.jpg?auto=webp&fit=crop&height=675&width=1200"
                />
              </center>

              <center>
                {" "}
                <h5 className="pt-3">What is My Friend Cayla ?</h5>
              </center>
              <p className="textnormal col mt-3 px-5">
                Internet-connected toys are a double-edged sword. On the one
                hand, they can offer access to a wealth of knowledge available
                online, but you need to trust such devices are secure before
                giving them to kids. In the case of the My Friend Cayla doll,
                that's definitely not the case. In December last year, My Friend
                filed a complaint with the FTC regarding the Cayla doll and
                i-Que robot. Due to the insecure Bluetooth connection between
                the doll and the robot, a hacker can even listen to or talk to a
                child through the doll.
              </p>
              <p className="textnormal col px-5">
                This doll is manufactured by Genesis Toys and distributed by
                Vivid Toy Group in Europe. Apparently, the dolls could be
                updated remotely, but this did not happen and now the Federal
                Network Agency (Bundesnetzagentur), the official German
                watchdog, is instructing parents in the country to destroy their
                My Friend Cayla dolls. According to the BBC, the Cayla doll is
                classified as a "hidden transmission device" under German
                telecom law. With the very strict secrecy laws in place in the
                country, dolls are basically illegal, and therefore push to
                destroy them.
              </p>
              <p className="textnormal col px-5">
                No matter where you are in the world, my friend should follow
                the advice not to use cola dolls. The only problem is if you
                have a child who is currently disturbed by the loss of it. Going
                to a toy store to choose a replacement, however, can be a
                solution.
              </p>
              <center>
                <h3 className="m-4">03.Blue Whale</h3>
                <img
                  className="imgg"
                  src="https://images.news18.com/ibnlive/uploads/2017/08/The-Deadly-blue-whale.jpg"
                />{" "}
              </center>
              <center>
                <h5 className="pt-3">What is Blue Whale ?</h5>
              </center>
              <p className="textnormal col mt-3 px-5">
                ‘Blue whale’ is pro-suicide group which psychologically provokes
                children to take on the ‘blue whale game’. After extensive Open
                Source research, it has been found that the game is in fact a
                secretive suicide challenge, otherwise known as a ‘group of
                death’ or ‘cult’ which encourages players to take part in
                self-destructive tasks, and eventually suicide. The name is
                derived from the phenomenon that blue whales beach themselves to
                die in an act of suicide (beaching). It may also be known as
                CИHИЙ KИT (Russian), Ballena Azul (Spanish) or ‘F57’ or ‘F58’ –
                its original name. The game originated from Russia in 2015, and
                has since been trending in central Asian countries like India,
                Kazakhstan and Kyrgyzstan, with cases also in the USA and
                Brazil.
              </p>
              <p className="textnormal col px-5">
                Children and teenagers are drawn to playing the game when they
                may be experiencing known mental health symptoms such as feeling
                low, depression, anxiety, lack of focus/interest and self-esteem
                issues. Their simple curiosity lures them to take on challenges,
                having been psychologically manipulated by the curators.
                Children are more vulnerable online as the virtual world allows
                them to act freely without the restrictions of the real world.
                Players are said to be seeking validation from curators and
                other players and made to feel that they are a part of something
                big and given a sense of purpose. There is the worry that
                younger children will access the content, not understanding the
                horrific nature of the game and what the consequences are. There
                is also the issues that children find it difficult to stand up
                to peer pressure, especially when threats are being made against
                them. On behalf of the Government and the Police, there is no
                control over admins of the platform – where it came from and who
                created it. For children who have become a part of the game and
                since withdrew from its dark challenges; there is fear of
                judgement and lack of support.
              </p>
              <center>
                <h3 className="m-4">04.Fire Fairy</h3>
                <img
                  className="imgg"
                  src="https://i.dailymail.co.uk/i/pix/2017/03/07/17/3E0B4E5D00000578-4290590-image-a-1_1488907566872.jpg"
                />{" "}
              </center>
              <center>
                <h5 className="pt-3">What is Fire Fairy ?</h5>
              </center>
              <p className="textnormal col mt-3 px-5">
                Five-year-old girl suffers horrific burns after becoming the
                latest victim of 'fire fairy' game spreading online where
                children are told to secretly turn on gas rings
              </p>
              <p className="textnormal col mt-3 px-5">
                The social media post says: 'At midnight when everybody is
                asleep, get up from your bed and go around the room three times,
                then say the magical words: "Alfey kingdom, sweet little
                fairies, give me the power, I'm asking you." 'Then go to the
                kitchen silently, so no one notices you or the magic of the
                words will disappear. Switch on the gas stove, all four burners.
                But do not light it. You don't want to get burns, do you? 'Then
                go to sleep. The magic gas will come to you, you will breathe it
                while sleeping and in the morning, when you wake up, say: "Thank
                you Alfeya, I've become a fairy." And you will became a real
                fairy of fire.'The appalling 'game' was highlighted by police
                following complaints from parents in the Vladimir region of
                Russia, said Lt-Col Andrei Tutuev. State investigator Irina
                Minina warned: 'It could be some kind of 'suicide game'. We are
                searching for those who are spreading these messages.' The
                Russian Investigative Committee - equivalent of the FBI -
                believes the real aim may be to spark panic among parents.
              </p>
              <center>
                <h3 className="m-4">05.Cloud Pets</h3>
                <img
                  className="imgg"
                  src="https://i.pinimg.com/originals/87/b1/8b/87b18b14c7cd11087c06762a90fcdf3f.jpg"
                />{" "}
              </center>
              <center>
                <h5 className="pt-3">What is Cloud Pets ?</h5>
              </center>
              <p className="textnormal col mt-3 p-5">
                That soft teddy bear seems harmless until hackers can use it to
                spy on your kids. Amazon said it has pulled CloudPets, a smart
                toy that researchers said was riddled with security flaws, from
                its online store. Last week, Walmart and Target stopped selling
                the toy. Amazon began removing CloudPets on Tuesday morning. The
                decision comes a day after Mozilla contacted Amazon with
                research showing new vulnerabilities on CloudPets. "In a world
                where data leaks are becoming more routine and products like
                CloudPets still sit on store shelves, I'm increasingly worried
                about my kids' privacy and security," Ashley Boyd, Mozilla's
                vice president of advocacy, said in a statement. Walmart and
                Target did not respond to a request for comment. This isn't the
                first time that Amazon has stopped selling products over privacy
                concerns. Last July, the online retailer giant suspended Blu
                phones its top selling phone at the time -- because researchers
                found spyware on the popular devices. Connected devices tend to
                be open to attacks for a multitude of reasons, whether it's
                default passwords, developers who never send security updates or
                owners who never install them. The US Consumer Product Safety
                Commission opened an investigation into the dangers of connected
                gadgets, also known as the Internet of Things, in March, while
                lawmakers introduced a bill to regulate smart devices. That's a
                particular problem when it comes to selling connected toys to
                children, since it opens up a new field of privacy concerns for
                parents. After advocates pointed out that the toy "My Friend
                Cayla" violated privacy rules by recording conversations without
                parental consent, Germany banned the doll and asked any parents
                who still owned it to destroy it. CloudPets, made by Spiral
                Toys, is a talking toy that's connected online, uses voice
                recordings and an online app through Bluetooth. But in 2017,
                hackers were able to access CloudPets' database, containing
                email addresses, passwords and voice recordings from children,
                which cybercriminals held for ransom at least twice. The breach
                affected more than 800,000 people. Mozilla worked with
                cybersecurity research firm Cure53 to see what vulnerabilities
                CloudPets still has after the original breach in 2017. They
                found that CloudPets' Bluetooth vulnerabilities first
                demonstrated more than a year ago are still open. The firm
                conducted its tests for vulnerabilities in March, and found that
                CloudPets did not meet security standards. Spiral Toys did not
                respond to a request for comment. "The company clearly does not
                care about their users' security and privacy being violated and
                makes no effort to respond to well-meaning attack reports,
                further facilitating and inviting malicious actions against
                their users," the researchers wrote in their report. The
                researchers also discovered that CloudPets' mobile app refers
                users to a website called "mycloudpets.com/tour," a domain that
                is currently for sale and can be redirected by potential
                criminals in online scams. CloudPets also had a third
                vulnerability, researchers said, that allowed potential hackers
                to install custom firmware to the toy without any security
                checks to stop them. Installing custom firmware would let a
                potential hacker take control of the toy, along with any data
                that passed through it. Researchers found that CloudPets' apps
                were last updated in May 2017 for iOS and January 2018 for
                Android. CloudPets' security issues calls into question what
                smart toys stores decide to stock their shelves with, as
                vulnerabilities continue to surface. "We also urge you to
                consider putting in place new or improved systems to ensure that
                products you stock, especially those that collect the
                information of children, have basic practices in place to
                respect the trust that consumers place in them," Mozilla said.{" "}
              </p>
              <center>
                <h5 className="pt-3">
                  Is Roblox Content Suitable for All Ages?
                </h5>
              </center>
              <p className="textnormal col mt-3 p-5">
                Available on smartphones, tablets, desktop computers, the Xbox
                One, and some VR headsets, Roblox has an ESRB rating of E10+ for
                Everyone 10 and up for Fantasy Violence, which means that
                typical gameplay should be suitable for most kids. However, the
                rating also includes a Users Interact notice, warning parents
                that players can communicate with each other, join groups and
                create and share games with each other. In fact, your child can
                even sell their game on Roblox! Although Roblox proactively
                monitors the content created on its platform, with 70 million
                active users a month some offensive communications or
                user-generated content may slip through the cracks. So, it’s
                important for parents to familiarize themselves with the robust
                parental controls that Roblox provides (more on that below) to
                ensure their children are shielded from inappropriate content or
                communications.
              </p>
              <center>
                {" "}
                <h5 className="pt-3">
                  Parental Controls and other Safety Features?
                </h5>
              </center>
              <p className="textnormal col mt-3 p-5">
                First and foremost, make sure that your child’s registration in
                Roblox includes an accurate birthdate! This will enable
                automatic filtering and other protections specifically designed
                to protect children under the age of 13. Being that Roblox
                primarily consists of user-created content, the Roblox team has
                integrated a variety of parental controls directly into its
                Settings, which is further explored in its Parent’s Guide.
                Roblox’s parental controls give parents the ability to curate
                the content their kids may encounter when playing, including
                options to restrict voice chat only to approved friends or turn
                it off entirely, create a white list of age-appropriate games
                for your kids, and more. You can learn how to enable those
                controls here.But that’s not all! Roblox also allows your child
                to block and report annoying or disruptive players. Make sure
                they (and you) know how to do so. Of course, this also creates
                an opportunity to have a discussion about online etiquette,
                which frankly shouldn’t be all that different than how you teach
                them to behave off-line! “Do unto others as you would have them
                do unto you” goes a long way. Another basic internet safety rule
                is to never share personal information or passwords online. No
                matter what. Concerned about the amount of time or money your
                child spends playing Roblox? Whichever device your child uses to
                play Roblox, there are a variety of settings you can activate,
                including restrictions on how much money your child can spend.
                Some parental tools like Microsoft’s Family Settings, Apple’s
                Screen Time and Google’s Family Link provide the ability to
                control exactly when or how long your child is permitted to play
                games to make sure they get their homework done or don’t stay up
                past their bedtime playing Roblox!
              </p>
            </div>
          </center>
        </section>
      </div>
    </div>
  );
}

export default Home;
