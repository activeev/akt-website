import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import ContactNew from "../components/Contact/contactNew"
import { Link } from "react-scroll"

import {FaLightbulb, FaProjectDiagram, FaBroadcastTower, FaCarrot} from "react-icons/fa"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"



export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>AKTive Ahoi! | AKT 2021</title>
      <meta name="Description" content="Mit voller Fahrt voraus geht es vom 15. bis 17.01.2021 nach Bremen.
      Setzen Sie die Segel und seien Sie Teil eines unvergesslichen Wochenendes!"/>
      <link rel="icon" href="/favicon-16.png" sizes="16x16"/>
      <link rel="icon" href="/favicon-32.png" sizes="32x32"/>
      <link rel="icon" href="/favicon-57.png" sizes="57x57"/>
      <link rel="icon" href="/favicon-76.png" sizes="76x76"/>
      <link rel="icon" href="/favicon-96.png" sizes="96x96"/>
      <link rel="icon" href="/favicon-128.png" sizes="128x128"/>
      <link rel="icon" href="/favicon-192.png" sizes="192x192"/>
      <link rel="icon" href="/favicon-228.png" sizes="228x228"/>
    </Helmet>
    <Layout>
      <Banner id="banner"/>
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
      >
        <IconContext.Provider
          value={{
            //size: "auto",
            className: "icon",
            style: {verticalAlign: "middle"}
          }}
        >
          <div className="flex-container trio-block">
            <Perk
              img=<FaLightbulb />
              title="Talentsuche"
            />
            <Perk
              img=<FaBroadcastTower />
            title="Vergrößern der Reichweite"
            />
            <Perk
              img=<FaProjectDiagram />
              title="Netzwerken"
            />
            <Perk
              img=<FaCarrot />
              title="Attraktivitäts- steigerung als Arbeitgeber"
            />
          </div>
        </IconContext.Provider>
      </TextBlockImg>
      <TextBlock
        id="program"
        title="Das Programm"
      >
        <table>
          <th>Freitag, 15.01.2021</th>
          <tr>
            <td>14.00</td>
            <td>Eröffnungsplenum</td>
          </tr>
          <tr>
            <td>20.00</td>
            <td>Company Night</td>
          </tr>
          <th>Samstag, 16.01.2021</th>
          <tr>
            <td>10.00</td>
            <td>Workshops</td>
          </tr>
          <tr>
            <td>15.00</td>
            <td>JE2JE</td>
          </tr>
          <tr>
            <td>19.00</td>
            <td>Business Dinner</td>
          </tr>
          <tr>
            <td>21.00</td>
            <td>Mottoparty</td>
          </tr>
          <th>Sonntag, 17.01.2021</th>
          <tr>
            <td>10.00</td>
            <td>Abschlussplenum</td>
          </tr>
        </table>
        <Link to="packages" smooth={true} duration={500}>
          <Button cta="Mehr erfahren" />
        </Link>
      </TextBlock>

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
            style: { verticalAlign: "middle", marginRight: "5px" },
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
                  <td><MdDone/></td>
                  <td>Logo auf Teilnehmerbadges</td>
                </tr>
                <tr>
                  <td><MdDone/></td>
                  <td>Printwerbung und Giveaways in Begrüßungstüten</td>
                </tr>
                <tr>
                  <td><MdDone/></td>
                  <td>Präsenz in der AKT-App</td>
                </tr>
                <tr>
                  <td><MdClear color="red"/></td>
                  <td className="linethrough">Stellenanzeige online und offline</td>
                </tr>
                <tr>
                  <td><MdClear color="red"/></td>
                  <td className="linethrough">Business Dinner / B2JE</td>
                </tr>
                <tr>
                  <td><MdClear color="red"/></td>
                  <td className="linethrough">Instagram- und Facebook-Promotion</td>
                </tr>
                <tr>
                  <td><MdClear color="red"/></td>
                  <td className="linethrough">Unternehmenspräsentation</td>
                </tr>
              </tbody>
            </table>
          </Package>
          <Package
            title="Kapitän"
            active={true}
            description="Nutzen Sie die Chance, nicht nur direkten Zugang zu zukünftigen Arbeitnehmern zu schaffen,
            sondern auch die Möglichkeit durch Bühnenpräsenz einen bleibenden Eindruck zu hinterlassen. Seien Sie
            außerdem durch laufende Print- und Online-Werbung durchgehend auf dem AKT präsent. Ihr persönlicher Platz
            auf der Brücke, hart am Wind und mit Kurs auf den Horizont."
            linkTo="contact"
            cta="Jetzt anfragen"
          >
            <table>
              <tbody>
                <tr>
                  <td><MdDone/></td>
                  <td>Logo auf Teilnehmerbadges</td>
                </tr>
                <tr>
                  <td><MdDone/></td>
                  <td>Printwerbung und Giveaways in Begrüßungstüten</td>
                </tr>
                <tr>
                  <td><MdDone/></td>
                  <td>Präsenz in der AKT-App</td>
                </tr>
                <tr>
                  <td><MdDone/></td>
                  <td>Stellenanzeige online und offline</td>
                </tr>
                <tr>
                  <td><MdDone/></td>
                  <td>Business Dinner / B2JE</td>
                </tr>
                <tr>
                  <td><MdDone/></td>
                  <td>Instagram- und Facebook-Promotion</td>
                </tr>
                <tr>
                  <td><MdDone/></td>
                  <td>Unternehmenspräsentation</td>
                </tr>
              </tbody>
            </table>
          </Package>
          <Package
            title="Offizier"
            active={false}
            description="Sichern Sie sich vollen Wind in den Segeln mit persönlichem Zugang zu Studierenden und einen
            direkten Austausch zwischen diesen und Ihrem Unternehmen. Außerdem können Sie das Interesse unserer
            Berater*innen durch zahlreiche Print- und Online-Werbung auf sich ziehen."
            linkTo="contact"
            cta="Jetzt anfragen"
          >
            <table>
              <tbody>
                <tr>
                  <td><MdDone/></td>
                  <td>Logo auf Teilnehmerbadges</td>
                </tr>
                <tr>
                  <td><MdDone/></td>
                  <td>Printwerbung und Giveaways in Begrüßungstüten</td>
                </tr>
                <tr>
                  <td><MdDone/></td>
                  <td>Präsenz in der AKT-App</td>
                </tr>
                <tr>
                  <td><MdDone/></td>
                  <td>Stellenanzeige online und offline</td>
                </tr>
                <tr>
                  <td><MdDone/></td>
                  <td>Business Dinner / B2JE</td>
                </tr>
                <tr>
                  <td><MdClear color="red"/></td>
                  <td className="linethrough">Instagram- und Facebook-Promotion</td>
                </tr>
                <tr>
                  <td><MdClear color="red"/></td>
                  <td className="linethrough">Unternehmenspräsentation</td>
                </tr>
              </tbody>
            </table>
          </Package>
        </IconContext.Provider>
      </Packages>
      <ContactNew
        id="contact"
        title="Interesse?"
        subtitle="Heuern Sie an in unserem Kontaktbüro!"
        name="Pia Franke"
        position="Admiral (Projektleitung)"
        phone="+49 176 9839 2363"
        mail="akt@active-bremen.de"
      />
    </Layout>
  </>
)
