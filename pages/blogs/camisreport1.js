import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    Center,
    useColorModeValue
  } from '@chakra-ui/react'
  import { Title, Meta } from '../../components/blog'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import Image from 'next/image'
  import imgCamisPaymentSquad from '../../public/images/blogs/camis_payment_squad.PNG'
  import imgCamisOlympicsTentBuilding from '../../public/images/blogs/camis_olympics_tentbuilding.JPG'
  import imgCamisOlympicsGold from '../../public/images/blogs/camis_olympics_gold.JPG'
  import imgCamisOlympicsAbandoned from '../../public/images/blogs/camis_olympics_abandoned.JPG'
  
  const h5Style = {
    fontFamily: 'Lora',
    fontStyle: 'oblique',
  }
  const h5StyleLight = {
    ...h5Style,
    color: '#274685',
  };
  const h5StyleDark = {
    ...h5Style,
    color: '#e9e5c0',
  };

  const Blog = () => (
    <Layout title="Co-op Work Term Report">
      <Container>
        <Title>
          Co-op Work Term Report <Badge>Summer 2024</Badge>
        </Title>
        <List ml={2} my={8}>
          <ListItem>
            <Meta>Stack</Meta>
            <span style={{fontFamily: 'Manrope'}}>C#, .NET, WPF, TypeScript, Angular, Git, Jira, Agile</span>
          </ListItem>
        </List>
        <Heading as='h4'>Intro</Heading>
        <br/>
        <P>
            This co-op term in the Summer of 2024 was a continuation of my previous term at Camis as a Software Developer. The job mostly remains the same, with it being a hybrid position and having a relaxed dress code. In the next few sections, I will be reflecting on my role and answer specific aspects of it. Do keep in mind, though, that this is supposed to be an 8-month term at the same place as last term, so some things will remain similar, but I will try to add new experiences wherever I can. I&apos;ve also sprinkled in some photos from our very own Olympics event that took place in August.
        </P><br/><br/>        
        <figure>
          <Image src={imgCamisOlympicsAbandoned} />
          <Center>
            <P style={{textIndent: '0em'}}>Team abandoned me in the egg relay race 😓</P>
          </Center>
        </figure>

        <br/><br/>

        <figure>
          <Image src={imgCamisOlympicsGold} />
          <Center>
            <P style={{textIndent: '0em'}}>Ended up getting gold in tent building 😁</P>
          </Center>
        </figure>

        <br/><br/>
        <Heading as='h4' fontSize={28}>Information about the Employer</Heading>
        <br/>
        <P>
            Camis is a software solutions company headquartered in Guelph that started with the need to address the requirements of park management all the way back in 1980. They are partnered with national, provincial, and state parks all over Canada and the U.S. to provide reservations and management solutions with the use of software and hardware. In current times, they are working with over 725 government operated facilities. My supervisor is still Ryan Ferguson, who is also the lead software developer of the team that I&apos;m on. Besides his leadership role during team meetings and such, he has scheduled one-on-one meetings semi-frequently to allow for feedback to be addressed from either party.
        </P><br/><br/>

        <figure>
          <Image src={imgCamisOlympicsTentBuilding} />
          <Center>
            <P style={{textIndent: '0em'}}>Tent building competition - Camis Olympics - August 15th, 2024</P>
          </Center>
        </figure><br/><br/>
        <Heading as='h4' fontSize={28}>Goals</Heading>
        <br/>
        <Heading as='h5' fontSize={18} style={useColorModeValue(h5StyleLight, h5StyleDark)}>I&apos;ve noticed that my ability to solve problems often comes down to not fully understanding the technologies being used. Thus, I would like to have a more solid grasp over the tech stack.</Heading>
        <br/>
        <P>
        After working here for some time, I naturally became more familiarized with the tech stack. Most of the work is done in C#, which in my opinion, felt similar to languages like C, Java, and JavaScript. There were some new things I haven&apos;t seen before, such as how unit tests were written, some specific keywords I&apos;ve never used before (like &apos;out&apos;), and some finicky operators.
        </P><br/><br/>
        <Heading as='h5' fontSize={18} style={useColorModeValue(h5StyleLight, h5StyleDark)}>Sometimes I get too absorbed with a problem and keep running into a metaphorical brick wall. I would like to recognize when I fall into this trap sooner and reach out to the team to maintain progress on the issue.</Heading>
        <br/>
        <P>
        Learning the fundamentals of debugging continued to be important tool for me all throughout, but with more time, I realized a bigger issue was that I was not properly able to classify the tasks, at least in terms of code. This means that I would get lost in trying to locate the code that I&apos;m concerned with. I also initially thought that I would somehow &quot;get it&quot; as I kept working there, but this was the wrong perspective. Since then, I had to make sure to ask the developers helping me out about their thought processes, instead of them just telling me where the code exists, what to change, and to see if I can apply it on my own. With some time of doing this, I became better able to classify the various tasks (getting familiar with what kind of domain the features probably exist within) I took on, getting started on them without assistance (with some exceptions), and having my questions to the other developers evolve from &quot;How do I begin to work on this?&quot; to &quot;Do you think my solution meets all the requirements?&quot; and making adjustments where needed.
        </P><br/><br/>
        <Heading as='h5' fontSize={18} style={useColorModeValue(h5StyleLight, h5StyleDark)}>I lack a lot of understanding when it comes to discussions that involve a lot of business terminology. The words themselves might be things I&apos;ve heard of before, but when applied in this relatively new context, I have a hard time following the conversation.</Heading>
        <br/>
        <P>
        In the previous term I mentioned that I was concerned about trying to ask questions during meetings where I would simply be asking about definitions of certain business terminology. This might be totally fine to others, but I would hate to break the flow of a productive conversation by butting in to ask simple questions. This kind of thought process can be sort of self-destructive, as not contributing means that I am not taking the responsibility of providing valuable insight, and this would sometimes have me tuned out. To break this cycle, I tried other ways to get familiar, by looking through and reading posts on Confluence, and if that doesn&apos;t fully answer the question, ask in the general squad chat on Slack, so that whoever has a bit of down time on their hands can take a moment to help me understand. Over some time, things just started clicking for me in terms of the various jargon being thrown around in meetings. This was partly inspired by observing the participation of the youngest full-time developer on the team, who made valuable contributions to these meetings, and have the concerns they brought up be taken seriously. They were also relatively new to the industry, and this made the problem seem a lot more approachable for me.
        </P><br/><br/>
        <Heading as='h4' fontSize={28}>Job Description</Heading>
        <br/>
        <P>
          This section largely remains the same, though in this term, we started on new initiatives. Since I&apos;m on the payment squad, my main tasks are typically in the space of online payments, integrated/non-integrated payments, reconciliation, and financial reporting. The specific kinds of work are either adding/removing features, maintenance, or bug fixes.<br/><br/>The required tasks are selected per sprint (agile), and the squad&apos;s members self-assign tasks in a first-come-first-serve basis. If someone does feel that they should be the one assigned to a specific task, there&apos;s never any conflict that arises and these sorts of issues get resolved almost immediately through basic, direct communication.<br/><br/>There are also regularly scheduled meetings, and a few extras on a few occasions that must be attended. The common ones are standup, where the developers on the team briefly describe their progress on their assigned task and any potential blockers they might have, while the managers and the analyst will chime in only if their responsibilities are relevant to the current sprint.<br/><br/>The next common meeting that occurs is backlog estimation, where developers and the analyst will go through a list of tasks that are not part of any sprint (based on priority by the product manager usually) and estimate the &apos;story points&apos; of each task or until the allocated time for the meeting ends. This approach contrasts with, say, to assign one member of the team as the designated estimator. When these approaches are juxtaposed, we can quickly understand that having one person estimating tasks could introduce a lot more inaccuracy (due to biases, skillset, etc.) rather than having the task-completing members all participate in estimation. This allows members of the squad to calibrate with each other, and helps converge on a more accurate result. <br/><br/>The final common set of meetings have to do with the ending and beginning of sprints. Sprint planning is where a greater goal of the sprint is set by the product manager and tasks are pulled into the sprint, which will be the tasks that developers start working on for the duration of the sprint (2 weeks). Sprint review takes place at the end of a sprint and is a meeting with the squad and internal stakeholders where the tasks that were completed are showcased to said stakeholders for feedback. Sprint retrospectives take place after reviews, where members in the squad provide feedback and constructive criticism on how the sprint went.
        </P><br/><br/>
        <Heading as='h4' fontSize={28}>Conclusion</Heading>
        <br/>
        <P>
          I am very grateful for the opportunity of working with the folks at Payment Squad and Camis at large. I feel like I&apos;ve become a more well-rounded developer as a result of my time and effort here. Notably, I&apos;ve learned how to debug my code, write unit tests and making sure any new code is covered, engaging in back-and-forths with reviewers on my pull requests, performing demos on features I&apos;ve worked on for internal stakeholders, providing feedback on every completed sprint, and making valuable contributions to meetings.
        </P><br/><br/>

        <figure>
          <Image src={imgCamisPaymentSquad} />
          <Center>
            <P style={{textIndent: '0em'}}>Payment squad members - August 29th, 2024</P>
          </Center>
        </figure><br/><br/>
  
        <Center>
          <Link href={'http://www.camis.com/'} fontFamily={'Manrope'}>Company Website</Link>
        </Center><br/>
        <Center>
          <Link href={'https://linkedin.com/company/camis-inc-/mycompany/'} fontFamily={'Manrope'}>Company LinkedIn</Link>
        </Center><br/>
      </Container>
    </Layout>
  )
  
  export default Blog
  export { getServerSideProps } from '../../components/chakra'
  