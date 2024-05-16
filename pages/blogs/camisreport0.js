//////////////////////////////////////////
//TODO: Write-up before end of May 15th
//////////////////////////////////////////
//////////////////////////////////////////
//TODO: Add images!
//////////////////////////////////////////
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
          Co-op Work Term Report <Badge>Winter 2024</Badge>
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
            During the Winter of 2024, I had the opportunity to work at Camis as a Software Developer co-op. This position was hybrid, allowing me to experience both in-office collaboration and the flexibility of working from home. The flexible schedule and relaxed dress code provided a comfortable yet productive work environment. The next few sections will provide more details about my experiences and the projects I worked on at Camis.
        </P><br/><br/>
        <Heading as='h4' fontSize={28}>Information about the Employer</Heading>
        <br/>
        <P>
            Camis is a software solutions company headquartered in Guelph that started with the need to address the requirements of park management all the way back in 1980. They are partnered with national, provincial, and state parks all over Canada and the U.S. to provide reservations and management solutions with the use of software and hardware. In current times, they are working with over 725 government operated facilities. My supervisor is Ryan Ferguson, who is also the lead software developer of the team that I’m on. Besides his leadership role during team meetings and such, he has scheduled one-on-one meetings semi-frequently to allow for feedback to be addressed from either party.
        </P><br/><br/>
        <Heading as='h4' fontSize={28}>Goals</Heading>
        <br/>
        <Heading as='h5' fontSize={18} style={useColorModeValue(h5StyleLight, h5StyleDark)}>I&apos;ve noticed that my ability to solve problems often comes down to not fully understanding the technologies being used. Thus, I would like to have a more solid grasp over the tech stack.</Heading>
        <br/>
        <P>
        I plan to take time after work or in between sprints to focus on specific elements of the tech stack, enhancing my knowledge through tutorials and mini projects. Accurately determining the story points for tasks during backlog grooming will help me gauge my proficiency with the tech stack and codebase. Additionally, I&apos;ve sought access to courses from one of my seniors and have been going through them to gain a better understanding of large-scale project structures. During PR reviews and when receiving help from other developers, I also make it a point to pick up best practices to further improve my skills.
        </P><br/><br/>
        <Heading as='h5' fontSize={18} style={useColorModeValue(h5StyleLight, h5StyleDark)}>Sometimes I get too absorbed with a problem and keep running into a metaphorical brick wall. I would like to recognize when I fall into this trap sooner and reach out to the team to maintain progress on the issue.</Heading>
        <br/>
        <P>
        I plan to initially work on the problem independently. If I can&apos;t find a solution, I will then reach out to another developer. This approach allows me to better understand and communicate the exact problem, facilitating more effective troubleshooting with the team&apos;s help. Roadblocks are inevitable, so it&apos;s important to leverage the support of a reliable team to solve the issue and learn how to tackle similar problems in the future.

        However, it&apos;s crucial to balance seeking help and working independently. Reaching out too early can be disruptive, considering other developers&apos; workloads. To create this balance, I&apos;ve started using debugger tools in the IDE, which were not emphasized in my education. This helps me gain a comprehensive understanding of the code, improving my ability to explain the problem when I do seek help, and sometimes even solving the issue on my own.

        </P><br/><br/>
        <Heading as='h5' fontSize={18} style={useColorModeValue(h5StyleLight, h5StyleDark)}>I lack a lot of understanding when it comes to discussions that involve a lot of business terminology. The words themselves might be things I&apos;ve heard of before, but when applied in this relatively new context, I have a hard time following the conversation.</Heading>
        <br/>
        <P>
        I will review the resources available on Confluence to familiarize myself with business terms and their specific applications. If this approach doesn&apos;t fully address my needs, I will overcome my fear of disrupting productivity by asking questions about these terms during discussions. I don&apos;t mind appearing uninformed; my main concern is maintaining the flow of the conversation.

        By actively seeking clarification, I can build confidence in speaking up and sharing my thoughts during meetings, aiming to make it feel natural to contribute. In the past, a senior commended me for asking insightful questions, so I believe this will likely happen again as I become more engaged in discussions. Additionally, taking notes during meetings helps me stay focused and understand the conversation better, ensuring I can follow along and participate effectively.

        </P><br/><br/>
        <Heading as='h4' fontSize={28}>Job Description</Heading>
        <br/>
        <P>
          Since I&apos;m on the payment squad, my main tasks are typically in the space of online payments, integrated/non-integrated payments, reconciliation, and financial reporting. The specific kinds of work are either adding/removing features, maintenance, or bug fixes.<br/><br/>The required tasks are selected per sprint (agile), and the squad&apos;s members self-assign tasks in a first-come-first-serve basis. If someone does feel that they should be the one assigned to a specific task, there&apos;s never any conflict that arises and these sorts of issues get resolved almost immediately through basic, direct communication.<br/><br/>There are also regularly scheduled meetings, and a few extras on a few occasions that must be attended. The common ones are standup, where the developers on the team briefly describe their progress on their assigned task and any potential blockers they might have, while the managers and the analyst will chime in only if their responsibilities are relevant to the current sprint.<br/><br/>The next common meeting that occurs is backlog estimation, where developers and the analyst will go through a list of tasks that are not part of any sprint (based on priority by the product manager usually) and estimate the &apos;story points&apos; of each task or until the allocated time for the meeting ends. This approach contrasts with, say, to assign one member of the team as the designated estimator. When these approaches are juxtaposed, we can quickly understand that having one person estimating tasks could introduce a lot more inaccuracy (due to biases, skillset, etc.) rather than having the task-completing members all participate in estimation. This allows members of the squad to calibrate with each other, and helps converge on a more accurate result. <br/><br/>The final common set of meetings have to do with the ending and beginning of sprints. Sprint planning is where a greater goal of the sprint is set by the product manager and tasks are pulled into the sprint, which will be the tasks that developers start working on for the duration of the sprint (2 weeks). Sprint review takes place at the end of a sprint and is a meeting with the squad and internal stakeholders where the tasks that were completed are showcased to said stakeholders for feedback. Sprint retrospectives take place after reviews, where members in the squad provide feedback and constructive criticism on how the sprint went.
        </P><br/><br/>
        <Heading as='h4' fontSize={28}>Conclusion</Heading>
        <br/>
        <P>
          The Winter term was great! At the beginning I struggled with a lot of things, but with constant communication with Ryan and the other developers, I feel that I&apos;m finally starting to understand the various facets of the Camis software, as well as firsthand experiencing an Agile environment.
        </P><br/><br/>
  
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
  