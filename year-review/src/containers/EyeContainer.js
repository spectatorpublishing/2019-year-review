import React, { Component } from 'react';
import styled from 'styled-components';

import ScrollingNavBar from '../components/Navigation/ScrollingNavBar';
import GenericPanelLayout from './GenericPanelLayout';
import PageIntro from '../components/PageIntro'
import EditorLetter from '../components/EditorLetter'

const img_src = "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"

let ParagraphBr = styled.br`
  line-height: 200%;
`

let A = styled.a`
  color: ${props => props.theme.white};
  text-decoration-color: ${props => props.theme.blue};

  &:hover {
    color: ${props => props.theme.blue};
  }
  &:focus {
    color: ${props => props.theme.blue};
  }
  &:active {
    color: ${props => props.theme.blue};
  }
`

const letterFromTheEditor = <React.Fragment>Dear readers,
  <ParagraphBr />
  The school year has nearly come and gone, and with its close we archive another full year of reporting and writing. This past year, I’ve been particularly proud of the ways our stories have pushed us to view our campus and the community we inhabit in a new light. 
  <ParagraphBr />
  We set our sights forward and wrote about the way things grow and change: from <A href="https://www.columbiaspectator.com/the-eye/2018/11/15/growing-together-the-student-effort-to-change-barnards-neuroscience-program/" target="_blank">Barnard’s neuroscience program</A>, to the birth of <A href="https://www.columbiaspectator.com/the-eye/2018/12/07/what-is-global-thought-anyway/" target="_blank">strange</A>, <A href="https://www.columbiaspectator.com/the-eye/2018/10/16/health-healing-and-death-the-new-track-in-barnards-anthropology-department/" target="_blank">new</A> academic fields, to the very meaning of the <A href="https://www.columbiaspectator.com/the-eye/2018/10/25/trans-students-barnard-admissions-and-the-changing-meaning-of-the-womens-college/" target="_blank">‘Women’s College’</A>. We shadowed <A href="https://www.columbiaspectator.com/the-eye/2018/11/13/meet-the-rockstars-on-columbias-competition-math-team/" target="_blank">mathletes</A> prepping for a national competition, <A href="https://www.columbiaspectator.com/the-eye/2018/08/30/student-musician-commentary/" target="_blank">student musicians</A> readying to take the stage, and <A href="https://www.columbiaspectator.com/the-eye/2019/02/25/can-a-psychiatric-research-project-further-mental-health-education-in-harlem/" target="_blank">psychiatric researchers</A> developing mental health education in Harlem. We worried a lot about our future: What happens to <A href="https://www.columbiaspectator.com/the-eye/2018/10/08/ten-years-ago-columbia-pledged-76-million-to-local-nonprofits-what-happens-when-it-runs-out/" target="_blank">local nonprofits</A> when University funding runs out? How can Barnard help cultivate community for its <A href="https://www.columbiaspectator.com/the-eye/2019/02/26/how-can-barnard-help-cultivate-community-for-its-fgli-students/" target="_blank">FGLI students</A>? Can <A href="https://www.columbiaspectator.com/eye-lead/2018/11/14/can-columbias-fraternities-survive-the-national-threat-to-greek-life/" target="_blank">Columbia’s fraternities</A> change?
  <ParagraphBr />
  We dove backwards, deep into the archives, gleaning knowledge from our tumultuous past. We excavated a history of struggles at Columbia—for <A href="https://www.columbiaspectator.com/the-eye/2018/10/04/indigenous-studies-at-columbia-a-struggle-for-consistency/" target="_blank">hiring</A> and <A href="https://www.columbiaspectator.com/the-eye/2018/09/26/african-studies-and-columbia-a-strained-60-year-relationship/" target="_blank">funding</A> and <A href="https://www.columbiaspectator.com/eye-lead/2018/09/26/looking-back-18-years-into-the-fight-for-a-union/" target="_blank">unions</A> and <A href="https://www.columbiaspectator.com/eye-lead/2019/04/11/party-foul-the-rise-of-alcohol-discipline-at-columbia-3/" target="_blank">parties</A> and <A href="https://www.columbiaspectator.com/eye-lead/2018/12/04/the-case-for-sacred-space-50-years-of-debate/" target="_blank">spaces</A> (and more <A href="https://www.columbiaspectator.com/the-eye/2018/09/24/students-were-unable-to-change-lerner-for-over-a-decade-what-was-different-this-time/" target="_blank">spaces</A>) and even for the <A href="https://www.columbiaspectator.com/eye/2019/03/26/genealogy/" target="_blank">preservation</A> of history itself. We remembered how things came to be: <A href="https://www.columbiaspectator.com/the-eye/2019/02/13/a-little-village-its-boundaries-and-its-stewards/" target="_blank">a neighborhood</A>, <A href="https://www.columbiaspectator.com/the-eye/2018/11/20/the-ivy-league-and-the-cotton-club/" target="_blank">a jazz club</A>, <A href="https://www.columbiaspectator.com/the-eye/2018/10/12/who-lived-in-your-dorm-before-it-was-a-dorm/" target="_blank">your dorm</A>, and we remembered things no longer with us: <A href="https://www.columbiaspectator.com/the-eye/2019/05/03/remembering-wallace-broecker-the-prophet-of-climate-change/" target="_blank">beloved</A> <A href="https://www.columbiaspectator.com/the-eye/2018/11/13/marcellus-blount-loved-to-dance-reflections-on-his-33-years-at-columbia/" target="_blank">professors</A> <A href="https://www.columbiaspectator.com/the-eye/2019/02/20/starrs-wars-episode-1/" target="_blank">and</A> <A href="https://www.columbiaspectator.com/the-eye/2019/04/27/starrs-wars-episode-ii/" target="_blank">priests</A>, a <A href="https://www.columbiaspectator.com/the-eye/2019/04/24/in-the-1980s-columbia-ran-a-homeless-shelter-what-are-we-doing-now/" target="_blank">University-run shelter</A>, and an entire college Columbia may prefer to <A href="https://www.columbiaspectator.com/the-eye/2019/04/15/nearly-a-century-ago-columbias-jewish-applicants-were-sent-to-brooklyn/" target="_blank">forget</A>.
  <ParagraphBr />
  We turned our gaze outwards, beyond the borders of the Morningside campus and into the West Harlem community. We wrote and wrote and wrote about the <A href="https://www.columbiaspectator.com/eye/2018/cba-landing-page/" target="_blank">Community Benefits Agreement</A>, the document that enshrines Columbia’s commitments to the neighborhood in compensation for its Manhattanville expansion. We thought about the consequences of that expansion—about how local residents remain resilient in the face of <A href="https://www.columbiaspectator.com/the-eye/2018/11/16/what-happened-to-the-residents-of-602-west-132nd-st/" target="_blank">displacement</A> and <A href="https://www.columbiaspectator.com/the-eye/2019/04/25/columbia-is-trying-to-make-manhattanville-construction-noise-bearable-is-it-working/" target="_blank">noise</A>, and about how the expansion has shaped local hiring, <A href="https://www.columbiaspectator.com/the-eye/2019/02/06/how-have-local-hiring-targets-shaped-columbias-manhattanville-construction-site/" target="_blank">on construction sites</A> and <A href="https://www.columbiaspectator.com/the-eye/2018/10/25/a-columbia-initiative-has-placed-hundreds-in-university-jobs-but-many-local-residents-have-never-heard-of-it/" target="_blank">among residents</A>. 
  <ParagraphBr />
  We looked inwards, in our essays, reflecting on <A href="https://www.columbiaspectator.com/the-eye/2019/02/05/long-days-long-walks/" target="_blank">our walks</A> and our runs (<A href="https://www.columbiaspectator.com/the-eye/2019/04/15/inside-the-pigeon-eat-pigeon-world-of-hall-council-politics/" target="_blank">political</A> and <A href="https://www.columbiaspectator.com/the-eye/2019/02/26/chasing-consistency/" target="_blank">otherwise</A>), on <A href="https://www.columbiaspectator.com/the-eye/2019/04/23/i-am-more-than-my-id/" target="_blank">how others try to define us</A>, and on <A href="https://www.columbiaspectator.com/the-eye/2019/02/26/pronoun-problems/" target="_blank">how we define ourselves</A>. We wrote about about loss of <A href="https://www.columbiaspectator.com/the-eye/2019/02/04/a-wish-unfulfilled/" target="_blank">family</A> and of <A href="https://www.columbiaspectator.com/the-eye/2019/02/12/did-grandma-burn-my-house-down/" target="_blank">home</A>, about <A href="https://www.columbiaspectator.com/the-eye/2019/02/04/my-adoption-a-self-portrait/" target="_blank">identity </A>as <A href="https://www.columbiaspectator.com/the-eye/2019/02/12/my-fathers-daughter/" target="_blank">a daughter</A> and <A href="https://www.columbiaspectator.com/the-eye/2019/04/01/this-is-great-content/" target="_blank">a sister</A> and <A href="https://www.columbiaspectator.com/the-eye/2018/11/21/learning-to-be-a-brother/" target="_blank">a brother</A>. We chased <A href="https://www.columbiaspectator.com/the-eye/2019/04/15/do-go-chasing-waterfalls/" target="_blank">waterfalls</A> and <A href="https://www.columbiaspectator.com/the-eye/2019/03/29/a-tight-connection/" target="_blank">connecting flights</A>. We thought about what it meant to be <A href="https://www.columbiaspectator.com/the-eye/2018/11/19/both-here-and-not-what-it-means-to-navigate-bipolar/" target="_blank">both here and not</A>, to enter <A href="https://www.columbiaspectator.com/the-eye/2019/04/24/red-white-and-turmeric/" target="_blank">the public record</A>, to become engulfed in <A href="https://www.columbiaspectator.com/the-eye/2019/02/18/caught-in-the-crossfire/" target="_blank">a media firestorm</A>. We took more walks—some of these were <A href="https://www.columbiaspectator.com/the-eye/2018/09/26/the-least-symbolic-thing-in-the-world/" target="_blank">long and painful walks</A> and others had <A href="https://www.columbiaspectator.com/the-eye/2018/12/06/can-i-pet-your-dog/" target="_blank">dogs</A>—and we thought a lot on those walks, <A href="https://www.columbiaspectator.com/the-eye/2019/02/19/a-walk-from-harmony-hall-to-campus/" target="_blank">about music</A>, <A href="https://www.columbiaspectator.com/the-eye/2019/02/19/meet-me-on-the-lighted-path/" target="_blank">about lights</A>. We've also had our walks interrupted by the <A href="https://www.columbiaspectator.com/the-eye/2019/02/05/in-the-intersection/" target="_blank">odd headless eel</A>.
  <ParagraphBr />
  But wherever we looked, we looked closely: peeking behind the closed door of the <A href="https://www.columbiaspectator.com/eye-lead/2019/02/07/first-advise-no-harm-the-open-closed-and-revolving-doors-of-columbias-socially-responsible-investing-2/" target="_blank">Advisory Committee on Socially Responsible Investing</A>, unearthing Columbia’s <A href="https://www.columbiaspectator.com/eye-lead/2018/10/31/notes-from-the-underground/" target="_blank">underground music scene</A>, and stepping into the exclusive world of<A href="https://www.columbiaspectator.com/eye-lead/2019/03/07/access-denied-columbia-clubs-and-their-struggle-for-inclusivity/" target="_blank"> student clubs</A>. We parsed through many, many pages of policy, investigating how Columbia’s <A href="https://www.columbiaspectator.com/eye-lead/2019/02/24/the-constitution-of-a-community-why-student-clubs-are-starting-to-take-sexual-violence-response-into-their-own-hands/" target="_blank">gender-based misconduct policy</A> has left student leaders facing accusations within their groups without clear guidance, and how <A href="https://www.columbiaspectator.com/eye-lead/2019/02/28/hate-happens-at-columbia-how-does-the-university-respond/" target="_blank">hate crime and bias-incident response protocols</A> have been applied inconsistently, if at all. We analyzed 327 pages of legalese, which we carried in our backpacks for weeks, in order to understand how the <A href="https://www.columbiaspectator.com/the-eye/2019/04/19/move-aside-cba-heres-what-you-need-to-know-about-the-dcr/" target="_blank">Declaration of Covenants and Restrictions</A> informs Columbia’s relationship with the West Harlem community. We scrutinized governmental policies, too, and found that for international graduate students and postdocs, life can hinge on <A href="https://www.columbiaspectator.com/eye-lead/2019/04/24/extra-baggage-the-difficulties-graduate-students-and-postdocs-face-navigating-columbia-on-a-visa/" target="_blank">the limitations of visa policy</A>. 
  <ParagraphBr />
  As we set our sights on summer after a year of looking elsewhere, we leave knowing a little better what our university and our community look like. Whether the next four months bring you a life-changing trek in the Himalayas, or a life-affirming experience in the field you’ve dreamed of, or, possibly, just an internship at Goldman Sachs, we can only hope that we’ve made an impact on the way you see campus—that everything we have researched, reported, and written has challenged you to look at Columbia through the same eyes that we do: lovingly and critically and carefully.
  <ParagraphBr />
  See you next year,
  <br />
  Julian Shen-Berro
  <br />
  Managing Editor of The Eye
  </React.Fragment>


class EyeContainer extends Component {

  constructor() {
      super()

  }

  render() {
    return (
      <React.Fragment>
        <div>
          <PageIntro title="THE EYE" description={this.props.data.blurb} img_src={this.props.data.img}/>
          <EditorLetter letter={letterFromTheEditor} author="Julian Shen-Berro" role="Managing Editor of The Eye"/>
          <ScrollingNavBar menuItems={this.props.data.sections}>
            {this.props.data.items.map((data, i) => 
              <GenericPanelLayout key={i} data = {this.props.data.items[i]} />)}
          </ScrollingNavBar> 
        </div>
      </React.Fragment>
    );
  }
}

export default EyeContainer;
