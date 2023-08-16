import {
    Box,
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Heading,
    Center,
    useColorMode,
    useColorModeValue
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, BlogImage, Meta } from '../../components/blog'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const h5StyleLight = {
    color: '#274685',
    fontFamily: 'Lora',
    fontStyle: 'oblique',
  };
  const h5StyleDark = {
    color: '#e9e5c0',
    fontFamily: 'Lora',
    fontStyle: 'oblique',
  };

  const Blog = () => (
    <Layout title="Co-op Work Term Report">
      <Container>
        <Title>
          Co-op Work Term Report <Badge>2022</Badge>
        </Title>
        <List ml={2} my={8}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, NodeJS, Puppeteer, Git, UNIX, Agile</span>
          </ListItem>
        </List>
        <Heading as='h4'>Intro</Heading>
        <br/>
        <P>
            Hi! I'm Joudat, and I'm a Computer Science Co-op student at the University of Guelph. Over the Summer and Fall of 2022, I worked with Condoworks as a junior developer. The position was remote, so I didn't get to experience working with others in an office environment. In some ways, this was a downside, but there were benefits to this. Schedules were more flexible, and the dress code was also laxer. This also allowed me to take a course during my co-op term. The next few sections will give more detail about my experience at Condoworks.
        </P><br/><br/>
        <Heading as='h4' fontSize={28}>Information about the Employer</Heading>
        <br/>
        <P>
          Condoworks is an accounts payable automation platform for property management companies, seeking to enable clients to receive, code, approve, post, and pay all of their invoices conveniently, saving lots of time and paper. Most of the work at this company is related to software development, with a heavy focus on the web. There is no headquarters or office for this company, even before the pandemic. Erik Levinson, who is the CTO of the company and my supervisor, has a bachelor's in Computer Science, and is on the Board of Directors for the Condominium Authority of Ontario. Also, he loves making DIY improvements to his house.
        </P><br/><br/>
        <Heading as='h4' fontSize={28}>Goals</Heading>
        <br/>
        <Heading as='h5' fontSize={18} style={useColorModeValue(h5StyleLight, h5StyleDark)}>I still have some gaps with some of the tools we use, more specifically, parser testing.</Heading>
        <br/>
        <P>
          Although I understood most of what my job required, there were some aspects that I was less familiar with, even after the onboarding process. This was due to not spending enough time working on those kinds of tickets. The tickets that I had trouble with were those that needed improvements to parser test scores. I knew how to fix parsers, but I didn't know how to increase the overall score. The overall scoring is based on each entry getting a score between 0.0 to 1.0, and if the score is less than 1.0, fixing the field that is missing/not read properly, or knowing when to ignore the results of that entry entirely to prevent bad entries from unnecessarily dropping overall scores. Once the process of parser test scores was explained to me by my supervisor, I was able to identify the problems with bad entries more clearly, and learned to exclude outliers or vendors that were dropped or reworked in the near future.
        </P><br/><br/>
        <Heading as='h5' fontSize={18} style={useColorModeValue(h5StyleLight, h5StyleDark)}>Plans on creating a program that would help speed up a common task.</Heading>
        <br/>
        <P>
          During the course of my work, I noticed that there were some common tasks that had to be repeated often, and thought that there could be a way of speeding this up. I proposed a solution to my supervisor, but while that solution would have worked, it too had unnecessary steps, and my supervisor went in a different direction which would have bypassed any extra work. This solution didn't really involve needing an extra program, as the current tool we were using already had features that would support the streamlining of the common task, and so the issue was resolved, but it was all done by my supervisor, since only he had the permissions to modify the tool we were using.
        </P><br/><br/>
        <Heading as='h5' fontSize={18} style={useColorModeValue(h5StyleLight, h5StyleDark)}>Debugging. Understand how to resolve issues regarding downloads, and understand behaviour of buggy elements on pages.</Heading>
        <br/>
        <P>
          Most of the issues I faced with scrapers had to do with figuring out how to get them to download. I worked with many customer portals, and each portal has its own way of navigation and downloads. Usually, the download behaviour for portals is either to download by just clicking the download button, or through a button that opens a new tab with the PDF, or through a URL, but sometimes, these methods will not work, for one reason or another. After many long calls with my supervisor and/or my coworker, I'm able to find out how to resolve these issues. Usually this will be because of how the page for the invoice loads, which requires a look at the network section in the browser's developer tools, and see if there is some common, programmatic data that can be used to force a download. Other times it will be because the button element on the page won't click properly with the scraper that's being used, which requires obscure workarounds to ensure correct behaviour, such as modifying or even removing attributes of that element.
        </P><br/><br/>
        <Heading as='h4' fontSize={28}>Job Description</Heading>
        <br/>
        <P>
          My main job was to work on building new scrapers and parsers for vendors that used our platform. This also involves the testing and debugging of these scrapers and parsers, as well as programs created by coworkers, previous co-ops, and sometimes, my employer. I would also sometimes modify some of the main tools that our code base would use. For example, adding skipped characters to avoid using OCR on certain invoices. On some fewer occasions, I would also create sales lists for my employer. The parsing side of work was a little simpler to understand, since I was mostly doing things that were similar to previous course work, with the exception of learning Regex (although some regex was required in our OOP course, it was never taught, since most of the time we would be using it to search for keywords, and not make use of the many utilities that regex provides). I had to learn web scraping on my own as part of the assessment for my application to Condoworks. I also learned more about what git has to offer. I learned about pull --rebase which would pull and update the branch, stash which saved me a lot of trouble bypassing warnings/errors generated by the linter from other incomplete files when trying to commit/push a few particular files, and merge requests, which would package all recent commits and deploy them to the production code. I also learned a lot by collaborating in a professional environment with my supervisor, the other developer, and ops, since none of my courses had assigned group work.
        </P><br/><br/>
        <Heading as='h4' fontSize={28}>Conclusion</Heading>
        <br/>
        <P>
          I had a great time working with the team at Condoworks. Collaborating in a professional environment with other developers has been an invaluable experience for me and has helped me grow in the communication of technical details and problem-solving. Thank you, Erik, for providing me with this opportunity.
        </P><br/><br/>
  
        <Center>
          <Link href={'https://www.linkedin.com/company/condoworks/?originalSubdomain=ca'}>Website</Link>
        </Center><br/>
        <Center>
          <Link href={'https://www.linkedin.com/company/condoworks/?originalSubdomain=ca'}>LinkedIn</Link>
        </Center><br/>
      </Container>
    </Layout>
  )
  
  export default Blog
  export { getServerSideProps } from '../../components/chakra'
  