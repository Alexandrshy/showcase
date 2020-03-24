import React from "react"

import { Layout } from "../components/layout/layout"
import { Page } from "../components/page/page"
import { Wrapper } from "../components/wrapper/wrapper"
import { Header } from "../components/resume/header/header"
import { Contacts } from "../components/resume/contacts/contacts"
import { Title } from "../components/resume/title/title"
import { Education } from "../components/resume/education/education"

import style from "./resume-page.module.css"

type PropsType = {
  data: {
    file: {
      childImageSharp: {
        fixed: {
          base64: string
          width: number
          height: number
          src: string
          srcSet: string
        }
      }
    }
  }
}

const ResumeTemplate: React.FC<PropsType> = () => (
  <Layout title="Alex Shulaev">
    <Page>
      <Wrapper>
        <Header />
        <div className={style.box}>
          <div className={style.additional}>
            <div className={style.additionalItem}>
              <Contacts />
            </div>
            <div className={style.additionalItem}>
              <Education />
            </div>
          </div>
          <div className={style.main}>
            <Title>Experience</Title>
            <article className={style.unit}>
              <div className={style.brief}>
                <p className={style.name}>
                  <a
                    href="https://www.glassesusa.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.link}
                  >
                    GlassesUSA
                  </a>{" "}
                  / <span className={style.position}> Frontend Developer</span>
                </p>
              </div>
              <p className={style.period}>
                <time>Aug 2018</time> &mdash; Present
              </p>
              <p>
                Optimax Eyewear is a company that sells glasses frames of
                popular brands and frames that have been developed in its own
                factories. This company is the market leader in the sale of
                glasses frames. The company has three projects GlassesUSA, UVP
                and Ottica. Now I'm working on the GlassesUSA project as a
                Frontend Developer, as part of an Analytics team of 5 people.
              </p>
              <p>
                In Optimax Eyewear, I was implementing and supporting solutions
                such as Impact Radius, Google Analytics, Dynamic Yield, and
                writing own solutions for measuring the profitability of
                decisions made. The work of the team of analysts is very
                important for the business since the further development of the
                entire company is based on the information collected.
              </p>
              <p>
                My team is also responsible for developing the design system.
                This system is necessary for all companies working with a large
                product to optimize the work of design and development teams.
                Every day we develop and introduce new components.
              </p>
              <p>My main responsibilities in the company are:</p>
              <ul>
                <li>
                  Implementation of ready-made solutions to the company's
                  services (two separate projects for mobile and desktop
                  versions) to collect information about users
                </li>
                <li>
                  Refactoring and supporting previously written code, also
                  rewriting the project on TS
                </li>
                <li>
                  Writing I&T and E2E tests using Puppeteer and React Testing
                  Library
                </li>
                <li>
                  Development of new components for design system. In addition,
                  automation setup for more convenient publishing and
                  implementation of new parts of the system
                </li>
                <li>Code review of other Frontend developers in the team</li>
                <li>
                  Work on the accessibility of the site, as it is interesting to
                  me and I consider it an important area for E-commerce projects
                  in the modern web.
                </li>
              </ul>
            </article>
            <article className={style.unit}>
              <div className={style.brief}>
                <p className={style.name}>
                  <a
                    href="https://retailrocket.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.link}
                  >
                    Retail Rocket
                  </a>{" "}
                  / <span className={style.position}> Frontend Developer</span>
                </p>
              </div>
              <p className={style.period}>
                <time>Oct 2015</time> &mdash; <time>Jul 2018</time>
              </p>
              <p>
                Retail Rocket is a startup that is engaged in the implementation
                of personal recommendations to customer sites and the
                development of personal email newsletters on the interests of
                the user in real-time. Now the company is actively developing
                and attracting new large customers (such customers as Auchan,
                Vans, Hoff, Sberbank work with Retail Rocket). Retail Rocket is
                active in the Russian, European and Latin American markets.
              </p>
              <p>
                The company already has more than 100 employees working remotely
                or in offices in Moscow and Tolyatti. I worked with Retail
                Rocket in Togliatti in the technical department consisting of 8
                people. I have been a Frontend developer. My main
                responsibilities are the development of email newsletters and
                the introduction of widgets with personal recommendations to
                client sites.
              </p>
              <p>
                The results of my work: successfully coped with the plan for
                developing and implementing recommendations widgets and email
                newsletters (it is necessary to perform a certain amount of work
                in a weekly cycle), improved the code review process by adding
                code verification conditions by several third-party developers
                (earlier the revision code was performed by one and the same
                developer), studied and actively used the Kanban methodology,
                implemented GitHub Gist because there was a lot of duplicate
                code - it allowed to speed up the development process, developed
                its own templates for widgets and email newsletters and a small
                library of standard components. I also gave speeches for the
                entire technical department where I talked about web
                accessibility and new approaches to designing interfaces.
              </p>
            </article>
            <article className={style.unit}>
              <div className={style.brief}>
                <p className={style.name}>
                  <a
                    href="https://gildiya.pro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.link}
                  >
                    Gildiya Pro
                  </a>{" "}
                  / <span className={style.position}> Frontend Developer</span>
                </p>
              </div>
              <p className={style.period}>
                <time>Apr 2017</time> &mdash; <time>Jul 2018</time>
              </p>
              <p>
                "Gildiya PRO" specializes in the development of Internet
                solutions for businesses. The main activities of this company:
                development and support of websites, mobile applications, and
                CRM-systems.
              </p>
              <p>
                The company "Gildiya PRO" works with such large Russian clients
                as: "Rosneft", "AvtoVAZ", "Avtostat", "Pobeda", "Mega-Lada".
              </p>
              <p>
                This company employs over 45 people. In this company, I served
                as a Frontend Developer. My responsibilities included the
                developing of interfaces for the company's customers, optimizing
                for search engines, and fixing ready-made sites. I also work on
                internal projects of the company (the own CMS system and
                business card sites in the areas of work of this company).
              </p>
              <p>
                The results of my work: many projects were developed for large
                Russian customers, all projects were completed by me according
                to the plan and I received only positive feedback on the results
                of my work, I successfully supported 3 projects (fixing bugs,
                introducing new functionality), finalizing CMS system. During my
                work in the company, the Frontend developers department grew
                from 1 person to 8, and I was engaged in training new employees,
                after which they independently engaged in projects in the
                company.
              </p>
            </article>
          </div>
        </div>
      </Wrapper>
    </Page>
  </Layout>
)

export default ResumeTemplate
