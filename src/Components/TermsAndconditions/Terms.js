import React, { useEffect, useState } from "react";
import "./Terms.css";
import Rankover from "../Rankroverdiv/Rankover";

const Terms = () => {
  const [termsHtmlContent, setTermsHtmlContent] = useState(null);

  // Use useEffect to perform actions after the initial render
  useEffect(() => {
    const content = document.getElementById("termscontentdiv");
    console.log("Terms HTML Content:", content);
    // Set the content in the state
    setTermsHtmlContent(content);
  }, []);
  return (
    <>
      <div className="App" id="termscontentdiv">
        <div className="Rankroverdiv">
          <Rankover />
        </div>
        <div className="FirstTermDiv">
        <h1>Terms And Conditions</h1>
        <p>
          All Customers are required to read and agree to the following terms
          and conditions before subscribing to RankRover Pro, a product of Auxo
          Innovations LLC. Customer’s communications with RankRover Pro related
          to any product will be considered acceptance of the following terms &
          conditions.
        </p>
        <p>
          The following terms and conditions apply to all Products and Services
          provided to customer by RankRover Pro.
        </p>
        <ol className="termsdiv">
          <li>
            RankRover Pro’s invoices for services rendered are billed on a
            recurring month-to-month basis (every 30 days), with the first
            payment due and owing at the time Customer purchases a subscription.
          </li>
          <li>
            RankRover Pro automatically bills Customer’s credit card on file
            each month to cover the cost of Customer’s invoice.
          </li>
          <li>
            If Customer fails to make a payment within five (5) days from the
            date of an invoice (whether due to intentional nonpayment or a
            declined credit card), a disruption in services may take effect
            until payment is made.
          </li>
          <li>
            Customer may terminate this Agreement at any time on thirty (30)
            days’ written notice to RankRover Pro. RankRover Pro may terminate
            this Agreement at any time if it determines, in its sole discretion,
            that doing so is in the best interest of RankRover Pro.
          </li>
          <li>
            Upon termination, RankRover Pro will deliver all files related to
            the website and its content to Customer. However, Customer will no
            longer have access to the Digital Catalyst Platform (“DCP”).
          </li>
          <li>
            RankRover Pro provides its Customers with a website and a
            proprietary dashboard (DCP) which allows Customers to review and
            manage aspects of their digital presence and digital marketing
            efforts (the “Website”).
          </li>
          <li>
            Customer will have the opportunity to upload content (including, but
            not limited to, text, articles, photos, graphics, videos, etc.) onto
            the Website or share its content with RankRover Pro for upload to
            the Website.
          </li>
          <li>
            Customer maintains ownership to its Domain, all content placed on
            the Website, as well as all back-end data acquired during the term
            in which it is a Customer of RankRover Pro (“Customer Property”).
            All Customer Property is transferred to Customer upon termination of
            this Agreement.
          </li>
          <li>
            Customer is responsible for the purchase and maintenance of its
            Domain URL which hosts the Website, including annual registration
            and renewal. RankRover Pro does not provide any services concerning
            registration or maintenance of Domain URLs.
          </li>
          <li>
            Customer represents and warrants that all content uploaded or shared
            for upload to the Website is owned by Customer, or, if not owned by
            Customer, that Customer has received proper authorization from the
            rightful Owner to utilize the content placed on the Website. This
            includes, but is not limited to, rights to photographs, logos,
            trademarks, tradenames, artwork, videos, likeness, graphics,
            articles, blogposts, text etc.
          </li>
          <li>
            In the event that any action or dispute is brought against RankRover
            Pro resulting from conduct of the Customer, including an action or
            dispute concerning content on the Customer’s Website, Customer shall
            indemnify, defend and hold harmless RankRover Pro, its officers,
            directors, shareholders, attorneys, successors and assigns from any
            and all claims, proceedings, matters and/or judgments arising
            therefrom
          </li>
          <li>
            RankRover Pro represents and warrants that it will make best efforts
            to provide uninterrupted access to the Website and its Products.
            However, it is possible that from time-to-time unanticipated
            circumstances can have a detrimental impact on access to the
            Products.
          </li>
          <li>
            RankRover Pro will not be responsible for any damages or injury
            caused by any failure of performance, error, omission, interruption,
            deletion, defect, delay in operation or transmission, computer
            virus, communication line failure, internet failure, theft or
            destruction or unauthorized access to the Products (website, data
            etc.), tortious behavior, negligence, or any other cause of action
            related to the Products.
          </li>
          <li>
            Customer authorizes RankRover Pro to access its Website from
            time-to-time for maintenance and updates. Except as directed by the
            Customer, RankRover Pro will not disclose any non-public
            Confidential Information of the Customer to any third-party.
            Likewise, the Customer agrees that it will not convey any non-public
            confidential information obtained from RankRover Pro to any
            third-party.
          </li>
          <li>
            The parties acknowledge that the Internet is neither owned nor
            controlled by any one entity; therefore, RankRover Pro makes no
            guarantee of any outcome as a result of Customer’s use of the
            Products or Website, including but not limited to any outcome
            concerning the RankRover Pro Solutions, SEO, lead generation, search
            engine rankings, or position. RankRover Pro represents that it will
            make good faith efforts to ensure that the Customer’s digital
            marketing is successful. RankRover Pro does not warrant that the
            functions supplied by its work, web pages, digital marketing,
            consultation, advice, the Products, or work will meet the Customer’s
            requirements or that the operation of the work/deliverables will be
            uninterrupted or error-free. In no event will RankRover Pro be
            liable to the Customer or to any third party for any damages,
            including any lost profits, lost savings or other incidental,
            consequential or special damages arising out of the operation of or
            inability to operate any of the Products supplied by RankRover Pro,
            even if RankRover Pro has been advised of the possibility of such
            damages.
          </li>
          <li>
            A cookie is an alphanumeric identifier which we transfer to your
            hard drive through your web browser when you visit our website. It
            enables our own system to recognize you when you visit our website
            again and improve our service to you. The information is used to
            track visitor use of the website and to compile statistical reports
            on website activity. For further information about cookies visit
            www.aboutcookies. org or www.allaboutcookies.org. Cookies may also
            be used to compile aggregate information about areas of our website
            that are visited most frequently. This traffic information can be
            used to enhance the content of our website and make your use of it
            easier. By accessing our website/Products, you agree to us placing
            cookies on your computer or device. If you wish to reject our
            cookie, you can configure your browser to do so. However, in a few
            cases some of our website/Products features may not function if you
            remove cookies from your browser. We shall not be liable for any
            malfunction or other such issue that may occur due to our use of
            cookies.
          </li>
          <li>
            The Customer does hereby expressly agree to indemnify and hold
            harmless RankRover Pro, its Owners, its principals, officers,
            employees, attorneys, and contractors against all suits, actions,
            claims, demands, or costs of any kind to which RankRover Pro may be
            subject to arising or resulting from anything done or omitted to be
            done by Customer in connection with its use of RankRover Pro’s
            services
          </li>
          <li>
            Customer may only use RankRover Pro’s services for lawful purposes.
            Transmission of any material in violation of any Federal, State or
            Local regulation is prohibited. This includes, but is not limited
            to, copyrighted material, material legally judged to be threatening
            or obscene, pornographic, profane, or material protected by trade
            secrets. This also includes links or any connection to such
            materials.
          </li>
          <li>
            This Agreement constitutes the entire agreement between RankRover
            Pro and Customer regarding the use of services. All prior and
            contemporaneous writings, or oral agreements, are hereby merged
            herein. This Agreement becomes effective immediately upon Customer’s
            electronic acknowledgment, which shall be considered Customer’s
            signature.
          </li>
          <li>
            Non-performance by either party hereunder, other than an obligation
            to pay money, shall be excused to the extent that performance is
            rendered impossible by strike, fire, flood, governmental acts,
            orders or restrictions, acts of God, or any other reason to the
            extent that the failure to perform is beyond the control of the
            non-performing party.
          </li>
          <li>
            This Agreement shall be governed by and interpreted in accordance
            with the laws of the State of New York without regard to such
            state’s principles of conflicts of law. The legal jurisdiction for
            this agreement shall reside in the New York State or Federal Courts,
            in the County of New York
          </li>
        </ol>
      </div>
      </div>
    
    </>
  );
};

export default Terms;
