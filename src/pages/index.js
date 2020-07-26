import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TimeTable from "../components/timetable/timetable"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import ContactNew from "../components/Contact/contactNew"
import { Link } from "react-scroll"

import {
  FaLightbulb,
  FaProjectDiagram,
  FaBroadcastTower,
  FaMagnet,
} from "react-icons/fa"

import { IconContext } from "react-icons"
import { MdCheck, MdClose, MdAdd } from "react-icons/md"

export default () => (
  <>
    <Helmet
      title="AKTive Ahoi! | AKT 2021"
      meta={[
        {name: 'description', content: 'Mit voller Fahrt voraus geht es vom 15. bis 17.01.2021 nach Bremen.\n' +
            'Setzen Sie die Segel und seien Sie Teil eines unvergesslichen Wochenendes!'},
      ]}
    >
      <html lang="de-DE"/>
    </Helmet>
    <Layout>
      <Banner id="banner" />
      <div id="event">
        <TextBlock
          id="about"
          title="AKTive Ahoi!"
          paragraph="Mit voller Fahrt voraus geht es vom 15. - 17.01.2021 nach Bremen zu dem Arbeitskreistreffen des BDSU.
        Das Treffen bietet Ihnen die Möglichkeit, talentierte studentische Unternehmensberater*innen kennenzulernen und
        die Bekanntheit Ihres Unternehmens zu steigern.
        Starten Sie das Jahr gemeinsam mit motivierten, arbeitseifrigen Studierenden aus ganz Deutschland.
        Setzen Sie die Segel Richtung Bremen und seien Sie Teil
        eines unvergesslichen Wochenendes!"
        >
          <Link to="perks" smooth={true} duration={500}>
            <Button cta="Mehr erfahren" />
          </Link>
        </TextBlock>
        <TextBlockImg
          id="perks"
          title="Ihre Vorteile"
          subtitle="Nutzen Sie die Veranstaltung als Werbeplattform für Ihr Unternehmen und hinterlassen Sie einen
                  bleibenden Eindruck bei unseren Berater*innen!"
          columns={2}
        >
          <IconContext.Provider
            value={{
              //size: "auto",
              className: "icon text-scaling",
              style: { verticalAlign: "middle" },
            }}
          >
            <Perk img=<FaLightbulb /> title="Talentsuche" />
            <Perk img=<FaBroadcastTower /> title="Vergrößern der Reichweite" />
            <Perk img=<FaProjectDiagram /> title="Netzwerken" />
            <Perk
              img=<FaMagnet />
              title="Attraktivitätssteigerung als Arbeitgeber"
            />
          </IconContext.Provider>
        </TextBlockImg>
      </div>

      <TimeTable
        id="program"
        title="Das Programm"
        to="packages"
        cta="Mehr erfahren"
        columns={2}
      >
        <div className="timetable-day">
          <h3>Freitag, 15.01.2021</h3>
          <p>14.00</p>
          <p>Eröffnungsplenum</p>
          <p>20.00</p>
          <p>Company Night</p>
        </div>
        <div className="timetable-day">
          <h3>Samstag, 16.01.2021</h3>
          <p>10.00</p>
          <p>Workshops</p>
          <p>15.00</p>
          <p>JE2JE</p>
          <p>19.00</p>
          <p>Business Dinner</p>
          <p>21.00</p>
          <p>Mottoparty</p>
        </div>
        <div className="timetable-day">
          <h3>Sonntag, 17.01.2021</h3>
          <p>10.00</p>
          <p>Abschlussplenum</p>
        </div>
      </TimeTable>

      <Packages
        id="packages"
        title="Werden Sie Teil der Crew"
        para="Wir bieten drei verschiedene Crew-Ränge an, die sich in Preis und Umfang unterscheiden.
              Wählen Sie Ihr passendes Paket und werden Sie Teil der Crew des AKT 2021 in Bremen."
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle" },
          }}
        >
          <Package
            title="Steuermann"
            active={false}
            description="Mit diesem Paket hissen Sie Ihre Unternehmensflagge und lichten den Anker. Steigern Sie die
            Bekanntheit Ihres Unternehmens und vergrößern Sie Ihre Reichweite deutschlandweit. Durch Merchandising und
            Printwerbung können Sie die Aufmerksamkeit der Berater*innen auf sich ziehen und beiläufig während des
            gesamten AKT präsent sein."
            linkTo="contact"
            cta="Jetzt anfragen"
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    <MdCheck />
                  </td>
                  <td>Logo auf Teilnehmerbadges</td>
                </tr>
                <tr>
                  <td>
                    <MdCheck />
                  </td>
                  <td>Printwerbung und Giveaways in Begrüßungstüten</td>
                </tr>
                <tr>
                  <td>
                    <MdCheck />
                  </td>
                  <td>Präsenz in der AKT-App</td>
                </tr>
                <tr>
                  <td>
                    <MdClose color="red" />
                  </td>
                  <td className="linethrough">
                    Stellenanzeige online und offline
                  </td>
                </tr>
                <tr>
                  <td>
                    <MdClose color="red" />
                  </td>
                  <td className="linethrough">Business Dinner</td>
                </tr>
                {/*<tr>*/}
                {/*  <td>*/}
                {/*    <MdClose color="red" />*/}
                {/*  </td>*/}
                {/*  <td className="linethrough">*/}
                {/*    Instagram- und Facebook-Promotion*/}
                {/*  </td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*  <td>*/}
                {/*    <MdClose color="red" />*/}
                {/*  </td>*/}
                {/*  <td className="linethrough">Unternehmenspräsentation</td>*/}
                {/*</tr>*/}
              </tbody>
            </table>
          </Package>
          <Package
            title="Offizier"
            active={false}
            description="Sichern Sie sich vollen Wind in den Segeln mit persönlichem Zugang zu Studierenden und einem
            direkten Austausch zwischen diesen und Ihrem Unternehmen. Außerdem können Sie das Interesse unserer
            Berater*innen durch zahlreiche Print- und Online-Werbung auf sich ziehen."
            linkTo="contact"
            cta="Jetzt anfragen"
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    <MdCheck />
                  </td>
                  <td>Logo auf Teilnehmerbadges</td>
                </tr>
                <tr>
                  <td>
                    <MdCheck />
                  </td>
                  <td>Printwerbung und Giveaways in Begrüßungstüten</td>
                </tr>
                <tr>
                  <td>
                    <MdCheck />
                  </td>
                  <td>Präsenz in der AKT-App</td>
                </tr>
                <tr>
                  <td>
                    <MdCheck />
                  </td>
                  <td>Stellenanzeige online und offline</td>
                </tr>
                <tr>
                  <td>
                    <MdCheck />
                  </td>
                  <td>Business Dinner</td>
                </tr>
                <tr>
                  <td>
                    <MdClose color="red" />
                  </td>
                  <td className="linethrough">
                    Instagram- und Facebook-Promotion
                  </td>
                </tr>
                <tr>
                  <td>
                    <MdClose color="red" />
                  </td>
                  <td className="linethrough">Unternehmenspräsentation</td>
                </tr>
              </tbody>
            </table>
          </Package>
          <Package
            title="Kapitän"
            active={true}
            description="Nutzen Sie die Chance, nicht nur direkten Zugang zu zukünftigen Arbeitnehmern zu schaffen,
            sondern auch die Möglichkeit, durch Bühnenpräsenz einen bleibenden Eindruck zu hinterlassen. Seien Sie
            außerdem durch laufende Print- und Online-Werbung durchgehend auf dem AKT präsent. Ihr persönlicher Platz
            auf der Brücke, hart am Wind und mit Kurs auf den Horizont."
            linkTo="contact"
            cta="Jetzt anfragen"
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    <MdCheck />
                  </td>
                  <td>Logo auf Teilnehmerbadges</td>
                </tr>
                <tr>
                  <td>
                    <MdCheck />
                  </td>
                  <td>Printwerbung und Giveaways in Begrüßungstüten</td>
                </tr>
                <tr>
                  <td>
                    <MdCheck />
                  </td>
                  <td>Präsenz in der AKT-App</td>
                </tr>
                <tr>
                  <td>
                    <MdCheck />
                  </td>
                  <td>Stellenanzeige online und offline</td>
                </tr>
                <tr>
                  <td>
                    <MdCheck />
                  </td>
                  <td>Business Dinner</td>
                </tr>
                <tr>
                  <td>
                    <MdCheck />
                  </td>
                  <td>Instagram- und Facebook-Promotion</td>
                </tr>
                <tr>
                  <td>
                    <MdCheck />
                  </td>
                  <td>Unternehmenspräsentation</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td />
                  <td>- Zubuchbar -</td>
                </tr>
                <tr>
                  <td>
                    <MdAdd />
                  </td>
                  <td>Company Night</td>
                </tr>
              </tfoot>
            </table>
          </Package>
        </IconContext.Provider>
      </Packages>
      <ContactNew
        id="contact"
        title="Kommen Sie an Bord"
        subtitle="Bei Fragen steht Ihnen unsere Crew zur Seite"
        name="Pia Franke"
        position="Admiral (Projektleitung)"
        phone="+49 1567 8347573"
        mailTo="akt@active-bremen.de"
        mailCc="pia.franke@active-bremen.de"
        subject="[AKT 2021] Anfrage von Musterfirma"
        body="Sehr%20geehrte%20Frau%20Franke,%0A%0A%0A%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen%0A%0AErika%20Musterfrau"
      />
    </Layout>
  </>
)
