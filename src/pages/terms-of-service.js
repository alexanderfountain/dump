import React from 'react';
import { Link } from 'gatsby';

import Layout from '../structure/Layout';

import Paths from '../constants/Paths';
import { charges } from '../constants/Data';

const TermsOfService = (props) => {
    return (
        <Layout
            bgColor='#FFFFFF'
            mainStyles={{paddingRight: 20, paddingLeft: 20, paddingBottom: 60}}
            title='Terms Of Service'
            description='Alliance Disposal On-Demand Waste Service. Terms Of Use For Our Dumpster Rentals, Other Waste Services And Our Website Policy.'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
        >
            <h1>Terms of Use</h1>
            <p>
                <b>PLEASE READ THESE TERMS OF USE CAREFULLY. They contain important information regarding your legal rights and remedies including information about future changes to these terms of use. Limitations of liability and class action waiver</b>
            </p>

            <h3>1. OVERVIEW</h3>
            <p>
                These Terms of Use ("Terms of Use") set forth the terms and conditions of your use of the websites (collectively, the "Site") for Alliance Disposal LLC and its subsidiaries and/or affiliates ("Alliance" or "we", "our", "us" or similar references) and the content and services (individually and collectively, the "Services") found at the Site. The terms "you", "your", "User" or "customer" shall refer to any individual or entity who accepts these Terms of Use by using the Site or the Services found at the Site. If you are agreeing to these Terms of Use on behalf of a corporate entity, you represent and warrant that you have the legal authority to bind such corporate entity to these Terms of Use, in which case the terms "you", "your", "user" or "customer" shall refer to such corporate entity. Nothing in these Terms of Use shall be deemed to confer any third-party rights or benefits.
            </p>
            <p>
                BY USING THE SITE OR SERVICE IN ANY MANNER, INCLUDING BUT NOT LIMITED TO VISITING OR BROWSING THE SITE, YOU AGREE TO BE BOUND BY THE TERMS OF THIS AGREEMENT, AND YOU CONSENT TO THE INFORMATION COLLECTION PRACTICES DISCLOSED IN THE <Link to={Paths.pp}>ALLIANCE PRIVACY POLICY</Link>, WHICH IS INCORPORATED BY REFERENCE INTO THIS AGREEMENT, TO RECEIVE REQUIRED NOTICES, AND TO ENGAGE IN ELECTRONIC OR WRITTEN TRANSACTIONS WITH ALLIANCE. IF YOU DO NOT UNCONDITIONALLY AGREE TO ALL THE TERMS AND CONDITIONS OF THE AGREEMENT, THEN YOU MUST IMMEDIATELY DISCONTINUE YOUR USE OF THE SERVICE.
            </p>

            <h3>2. SITE CONTENT</h3>
            <p>
                The content on the Site and the Services found at the Site, including without limitation the text, software, scripts, source code, graphics, photos, videos and interactive features and the trademarks, service marks and logos contained therein ("Alliance Content"), are owned by or licensed to Alliance, and are subject to copyright, trademark, and/or patent protection in the United States, Canada and foreign countries, and other intellectual property rights under United States, Canadian and foreign laws.
            </p>
            <p>
                The Alliance Content is provided to you "as is", "as available" and "with all faults" for your information and personal, non-commercial use only and may not be downloaded, copied, reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise exploited for any purposes whatsoever without the express prior written consent of Alliance. No right or license under any copyright, trademark, patent, or other proprietary right or license is granted by these Terms of Use. Alliance reserves all rights not expressly granted in and to the Alliance Content, the Site and the Services found at the Site, and these Terms of Use do not transfer ownership of any of these rights. You specifically agree not to distribute any of the Alliance Content without Alliance&apos;s prior written permission.
            </p>

            <h3>3. USE OF THE SITE AND SERVICES</h3>
            <p>
                You agree not to circumvent, disable or otherwise interfere with the security-related features of the Site or the Services (including without limitation those features that prevent or restrict use or copying of any Alliance Content) or enforce limitations on the use of the Site or the Services or the Alliance Content therein.
            </p>
            <p>
                You may not use the Site or Services in any manner that: (i) imposes an unreasonable or disproportionately large load on the Site&apos;s infrastructure, or otherwise adversely affects, restricts or inhibits any other user from using and enjoying the Site; (ii) introduces a virus or other harmful component to the Site; (iii) constitutes or contains false or misleading indications of origin or statements of fact including but not limited to impersonating any other person; (iv) contains any virus, Trojan horse, worm, time bomb, cancelbot or other similar harmful or deleterious programming routine; (v) results in the transmission of any information, data, text, images, links, files, etc., except in connection with your authorized use of the Site or (vi) results in the harvesting of any information concerning other users of the Site.
            </p>
            <p>
                In addition, you will not use the Site or the Services in any manner that: (i) is illegal, or promotes or encourages illegal activity; (ii) promotes, encourages or engages in defamatory, harassing, abusive or otherwise objectionable behavior; (iii) promotes, encourages or engages in child pornography or the exploitation of children; (iv) promotes, encourages or engages in hate speech, hate crime, terrorism, violence against people, animals, or property, or intolerance of or against any protected class; (v) promotes, encourages or engages in any spam or other unsolicited bulk email, or computer or network hacking or cracking; (vi) infringes on the intellectual property rights of another user or any other person or entity; (vii) violates the privacy or publicity rights of another user or any other person or entity, or breaches any duty of confidentiality that you owe to another user or any other person or entity; (viii) contains false or deceptive language, or unsubstantiated or comparative claims, regarding WCC, the Site or the Services.
            </p>
            <p>
                Alliance may change, suspend or discontinue any aspect of the Site at any time, including the availability of any Site feature, Services or Alliance Content (including without limitation prices and fees for the same). Alliance may also impose limits on certain features and services or restrict your access to parts or the entire Site without notice or liability.
            </p>
            <p>
                Due to technical difficulties with the Internet, Internet software or transmission problems could produce inaccurate or incomplete copies of information contained on the Site. Computer viruses or other destructive programs may also be inadvertently downloaded from the Site and Services.
            </p>
            <p>
                The Services constitute two types (1) a technology platform that enables users of the Services to arrange, schedule and monitor trash and recycling hauling services provided by third party providers of such services, including independent third party haulers and third party providers under agreement with the Company or certain of the Company’s affiliates (“Third Party Providers“). YOU ACKNOWLEDGE THAT THE COMPANY DOES NOT ALWAYS DIRECTLY PROVIDE HAULING SERVICES OR FUNCTION AS A HAULER FOR EVERY CUSTOMER. (2) A technology platform that enables users of the Services to arrange, schedule and monitor trash and recycling hauling services provided by Alliance. Alliance may at it&apos;s own discretion decide to provide you with Alliance direct hauling or use one of Alliance&apos;s Third Party Providers.
            </p>

            <h3>4. ACCOUNT</h3>
            <p>
                In order to utilize certain Site Services, you will be asked to create an account ("Account") by providing certain personal information such as your name, email address, physical address, payment information, account preferences and other relevant information. (The Site&apos;s <Link to={Paths.pp}>Privacy Policy</Link> explains how such information may be collected and used). When you use Services from Alliance on the Site, you accept these Terms of Use and the specific terms applicable to those Services. Neither Alliance nor any of its data providers will be liable in any way to you or to other parties for delays, inaccuracies, errors or omissions in material published on the Site. You may delete Your Account at any time, for any reason, by following the instructions in the Service or contacting us directly. The deletion of your account does not alter any other contractual arrangement you have with the Company, including any monies owed under separate agreements. You agree not to create an account or use our Services if you have been previously removed by the Company, or if you have been previously barred from the Service.
            </p>
            <p>
                When you create your Account you may be asked for your home telephone, mobile telephone number, and email address so that we may contact you regarding importation information about your service and account, and to provide special offers to our customers. By providing your home and/or mobile telephone numbers and/or email address to Alliance you consent to receive autodialed and/or pre-recorded calls (or text messages if you provide your mobile telephone number) and/or automated emails from or on behalf of Alliance regarding importation information about your service and account, and to provide special offers to our customers to the telephone number(s), email(s) provided.
            </p>
            <p>
                Account Holders must be 18 years or older, have properly registered and have a waste or recycling services account with Alliance (an "Account Holder"). An account is available only to users who have completed the information required by the Site&apos;s enrollment form. As an Account Holder, you agree to provide true, accurate, current, and complete information about yourself as prompted by the Site&apos;s enrollment form. Alliance reserves the right to revoke or prohibit your Account for any reason at any time, without notice, but, in particular, upon any violation of any of these Terms of Use or the <Link to={Paths.pp}>Privacy Policy</Link>.
            </p>
            <p>
                You are responsible for maintaining the confidentiality of your account and password. You may not share your password with third parties. You agree to accept responsibility for all activities that occur under your account or password. You agree to immediately notify us in the event of any unauthorized use of your account or other breach of security. You hereby acknowledge and agree that the Company will not be liable for your losses caused by an unauthorized use of your Account. Notwithstanding the foregoing, you may be liable for the losses of the Company or others due to such unauthorized use.
            </p>
            <p><b>4.a Payment Terms</b></p>
            <p>
                I. <b>Scheduling Services</b>. In order to schedule Services, you must (i) have in place or execute a separate agreement with the Company including additional provisions and payment terms (the “Customer Services Agreement”). If you are scheduling a Roll Off Dumpster Rental you are agreeing to the <Link to={Paths.rollOffTos}>Roll Off Dumpster Rental Customer Service Agreement</Link>. (ii) Choose the desired date and time of your hauling pickup if applicable, (iii) the desired location for the Services and (iv) provide any additional details requested for the hauling services, including pickup type and weight (if applicable). You may schedule on-demand hauling services by following the directions in the Service. You may be able to schedule reoccurring pickups through the Services, which will continue until timely terminated by you in accordance with the terms in existence at that time. You agree that the Company is authorized to invoice Your Account for all fees and charges due and payable to us hereunder and as set forth in the Customer Services Agreement and that no additional notice or consent is required.
            </p>
            <p>
                II. <b>Payment Process</b>. After you have reserved or otherwise scheduled hauling services through your use of the Service, the Company will invoice you in accordance with the Customer Services Agreement.
            </p>
            <p>
                III. <b>Cancellation</b>. You may cancel any request in accordance with our cancellation policy set forth from time to time by the Company. Failure to timely cancel a requested pickup (of any type) will result in charges payable to the Company in accordance with the Customer Services Agreement.
            </p>
            <p>
                <b>Your Responsibilities</b>. As the recipient of on-demand or reoccurring hauling Services, you agree to assume certain responsibilities. When you request on-demand or reoccurring Services, you agree to comply with any rules or requirements applicable to the Service requested and that you are made aware of, including as part of any confirmation email or alert within the mobile application (the “Requirements”). Whether or not there are Requirements, you agree to: (a) create in your business (or other space where Alliance or the Third Party Provider is requested to perform the Service) a safe space that is free of conditions that would make it difficult for Alliance or the Third Party Provider to perform their jobs (all as determined in Alliance&apos;s or the Third Party Provider&apos;s sole discretion) and (b) refrain, and cause other individuals present in your company to refrain, from any speech, conduct, or personal displays that a reasonable person would find offensive, intimidating, hostile, harassing, indecent or abusive while Alliance or the Third Party Provider is present. We reserve the right to terminate or refuse Services to anyone at any time in the event you do not fulfill your responsibilities as set forth in this Section, the Customer Services Agreement or if a hauler feels unsafe or uncomfortable with work environment or conditions for any reason.
            </p>
            <p>
               <b>Waste Material</b> - The waste material to be collected and disposed of or processed by Alliance Disposal or its partners is Bulky Waste, Construction and Demolition Waste, Class A recyclables, and Class B recyclables generated by the Customer as defined by N.J.A.C. 7:26 and N.J.A.C. 7:26A.  Waste shall only include such wastes that are acceptable at disposal facilities approved by the State or local agencies. Customer will not deliver for collection any dangerous materials including but not limited to the Prohibited Waste listed herein.  Prohibited Waste includes food waste, industrial waste, waste containing asbestos, septic tanks &amp; waste, biomedical waste, pesticides, solvents, oil, oil filters, oil containers, gas cans, propane tanks, batteries of any kind, appliances with Freon (air conditioners, refrigerators, etc.), Freon aerosol cans, foam aerosol cans, electronics (e.g., TV's, computers, monitors, computer parts, radios, etc.), and Hazardous Waste (e.g., ballasts with PCB's, devices containing mercury, fluorescent bulbs, etc.).  At Alliance Disposal’s or its partners’ discretion, Alliance Disposal may charge Customer an additional disposal fee to transport and dispose of Prohibited Waste and commingled waste.
            </p>
            <p>
                <b>Overweight Containers</b> – Any overweight (overage) charges are due and payable upon removal of the container and Alliance Disposal has the right to automatically charge your payment method on file. By accepting this agreement and placing an order in a checkout flow you authorize Alliance Disposal LLC to send instructions to the financial institution that issued your card to take payments from your card account in accordance with the terms of this agreement with Alliance Disposal LLC.
            </p>
            <p>
                <b>Overfilled Containers</b> - Alliance Disposal or its partners reserves the right to refuse to remove an overfilled container.  If overfilled, the Customer will be responsible for removing overfilled debris below the top of the container.  If overfilled, Alliance Disposal may charge Customer an additional fee for a “dry run” to remove the container.
            </p>
            <p>
                <b>Wait Time</b> – Driver must have access to service the container within thirty (30) minutes of arrival to the site.  If the driver is delayed longer than thirty (30) minutes, waiting time shall be charged at a rate of ${charges.tripCharge} per half 
            </p>
            <p>
                <b>Daily Rental Fee</b> – A daily rental fee of ${charges.extensionFee} per day will apply after the containers is not exchanged or returned in fourteen ({charges.baseRentalPeriod}) days, or if applicable by the custom expiration date purchased.  If the container is exchanged then the daily rental period starts over again.
            </p>

            <h3>5. RIGHTS AND LICENSES</h3>
            <p>
                License to Use Site. We grant you a non-transferable, non-exclusive, right to access and use the Services for your own use.
            </p>
            <p>
                License to Use Application. We grant you a non-exclusive, non-transferable right to access and use the Services made available through the mobile application and a non-exclusive, non-transferable license to download, install and use a copy of the mobile application on a single mobile device or computer that you or your company owns or controls solely for your use, subject at all times to the terms of this Agreement.
            </p>
            <p>
                Certain Restrictions. The rights granted to you in this Agreement are subject to the following restrictions: (a) you will not license, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Services; (b) you will not modify, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Services; (c) you will not access the Services in order to build a similar or competitive service; and (d) except as expressly stated herein, no part of the Services may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means. Any future release, update, or other addition to functionality of the Services will be subject to the terms of this Agreement. All copyright and other proprietary notices on any Services content must be retained on all copies thereof. You further agree that you will not seek to hire or otherwise engage our haulers for future Services unless you request Services directly from us.
            </p>
            <p>
                Modification. We reserve the right, at any time, to modify, suspend, or discontinue the Services or any part thereof with or without notice. You agree that we will not be liable to you or to any third party for any modification, suspension, or discontinuance of the Services or any part thereof, except and if otherwise expressly set forth in Section entitled “Term and Termination.”
            </p>
            <p>
                No Support or Maintenance. You acknowledge and agree that we will have no obligation to provide you with any support or maintenance in connection with the Services.
            </p>
            <p>
                Ownership of the Services. Excluding your User Content (defined below), you acknowledge that all the intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Services, including the Site and mobile applications, are owned by us or our licensors. The provision of the Services does not transfer to you or any third party any rights, title or interest in or to such intellectual property rights. We and our suppliers reserve all rights not granted in this Agreement.
            </p>

            <h3>6. USER CONTENT</h3>
            <p>
                User Content. “User Content” means any and all information and content that a user submits to or posts on: (a) the Services and (b) on social networking sites where we have a page or presence (collectively “SNS Pages”). You will own your User Content, with the understanding that you agree that we may use and reproduce the User Content you make available on our SNS Pages and on the Services. You assume all risks associated with the use of your User Content, including any reliance on its accuracy, completeness or usefulness by others, or any disclosure of your User Content that makes you or any third party personally identifiable. You hereby represent and warrant that your User Content does not violate the Acceptable Use Policy (defined below). You may not state or imply that your User Content is in any way provided, sponsored or endorsed by us. Because you alone are responsible for your User Content, you may expose yourself to liability if, for example, your User Content violates the Acceptable Use Policy. We are not obligated to backup any User Content and User Content may be deleted at any time. You are solely responsible for creating backup copies of your User Content if you desire.
            </p>
            <p>
                License. You hereby grant, and you represent and warrant that you have the right to grant, to us an irrevocable, nonexclusive, royalty-free and fully paid, worldwide license to reproduce, distribute, publicly display and perform, prepare derivative works of, incorporate into other works, and otherwise use your User Content, and to grant sublicenses of the foregoing, solely for the purposes of including your User Content in the Site and Services. You agree to irrevocably waive (and cause to be waived) any claims and assertions of moral rights or attribution with respect to your User Content.
            </p>

            <h3>7. FEEDBACK</h3>
            <p>
                If you provide us any feedback or suggestions regarding the Services (“Feedback”), you hereby assign to us all rights in the Feedback and agree that we will have the right to use such Feedback and related information in any manner we deem appropriate. We will treat any Feedback you provide to us as non-confidential and non-proprietary. You agree that you will not submit to us any information or ideas that you consider to be confidential or proprietary.
            </p>

            <h3>8. INDEMNITY</h3>
            <p>
                You agree to indemnify and hold us (and our officers, employees, and agents) harmless, including costs and attorneys’ fees, from any claim or demand made by any third party due to or arising out of (a) your use of the Services, (b) your User Content, (c) your violation of this Agreement; or (d) your violation of applicable laws or regulations. We reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us and you agree to cooperate with our defense of these claims. You agree not to settle any matter without our prior written consent. We will use reasonable efforts to notify you of any such claim, action or proceeding upon becoming aware of it.
            </p>

            <h3>9. THIRD PARTY SITES, ADVERTISING, LINKING AND OTHER USERS</h3>
            <p>
                Third Party Sites, Ads and Ad Networks. The Site might contain links to third party websites, services, and advertisements for third parties (collectively, “Third Party Sites &amp; Ads”). Such Third Party Sites &amp; Ads are not under our control and we are not responsible for any Third Party Sites &amp; Ads. We provide these Third Party Sites &amp; Ads only as a convenience and do not review, approve, monitor, endorse, warrant, or make any representations with respect to Third Party Sites &amp; Ads. You use all Third Party Sites &amp; Ads at your own risk. When you link to a Third Party Site &amp; Ad, the applicable third party’s terms and policies apply, including the third party’s privacy and data gathering practices. You should make whatever investigation you feel necessary or appropriate before proceeding with any transaction in connection with such Third Party Sites &amp; Ads. We may also work with advertising partners that may deliver advertisements to you on or off our Site based on your activities on the Site or within the Services.
            </p>
            <p>
                Other Users. Each Service user is solely responsible for any and all of his or her User Content. Because we do not control User Content, you acknowledge and agree that we are not responsible for any User Content and we make no guarantees regarding the accuracy, currency, suitability, or quality of any User Content, and we assume no responsibility for any User Content. Your interactions with other Site or Service users are solely between you and such user. You agree that we will not be responsible for any loss or damage incurred as the result of any such interactions. If there is a dispute between you and any Service user, we are under no obligation to become involved.
            </p>
            <p>
                Without limiting any other terms of the Agreement, you must comply with all applicable third-party terms of agreement.
            </p>

            <h3>10. RELEASE</h3>
            <p>
                You hereby release and forever discharge us (and our officers, employees, agents, successors, and assigns) from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature (including personal injury, death, and property damage), that has arisen or arises directly or indirectly out of, or relates directly or indirectly to, any interactions with, or act or omission of, other Service users or Third Party Sites &amp; Ads. IF YOU ARE A CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES: “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR.”
            </p>

            <h3>11. DISCLAIMERS</h3>
            <p>
                THE SERVICES, INCLUDING THE SITE AND THE APPLICATIONS, ARE PROVIDED “AS-IS” AND “AS AVAILABLE” AND WE (AND OUR SERVICE PROVIDERS AND THIRD PARTY PROVIDER) EXPRESSLY DISCLAIM ANY WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING THE WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT. WE (AND OUR SUPPLIERS) MAKE NO WARRANTY THAT THE SERVICES: (a) WILL MEET YOUR REQUIREMENTS; (b) WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS; (c) WILL BE ACCURATE, RELIABLE, FREE OF VIRUSES OR OTHER HARMFUL CODE, COMPLETE, LEGAL, OR SAFE OR (d) THAT THE ON-DEMAND HAULER SERVICES WILL BE TO YOUR SATISFACTION. WE ARE NOT LIABLE FOR ANY DAMAGE A HAULER MIGHT CAUSE WHILE ONSITE OR AT YOUR HOME OF OFFICE.
                <br /><br />
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU.
            </p>

            <h3>12. LIMITATION ON LIABILITY</h3>
            <p>
                IN NO EVENT WILL WE, OUR THIRD PARTY PROVIDERS (AND OUR HAULERS) BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFIT OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES ARISING FROM OR RELATING TO THIS AGREEMENT OR YOUR USE OF, OR INABILITY TO USE, THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ACCESS TO, AND USE OF, THE SERVICES ARE AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGES. IN NO EVENT SHALL ALLIANCE BE LIABLE TO YOU OR ANY THIRD PARTY FOR DAMAGES RESULTING FROM: (1) THE SITE FAILING TO OPERATE UNINTERRUPTED OR ERROR FREE; (2) DEFECTS OR ERRORS IN THE SITE; (3) VIRUSES OR OTHER HARMFUL COMPONENTS; OR (4) INACCURATE SITE CONTENT.
            </p>
            <p>
                NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY (AND THAT OF OUR THIRD PARTY PROVIDERS AND HAULERS) TO YOU FOR ANY DAMAGES ARISING FROM OR RELATED TO THIS AGREEMENT (FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION), WILL AT ALL TIMES BE LIMITED TO THE GREATER OF (a) FIFTY US DOLLARS ($50) OR (b) AMOUNTS YOU’VE PAID THE COMPANY IN THE PRIOR 12 MONTHS (IF ANY). THE EXISTENCE OF MORE THAN ONE CLAIM WILL NOT ENLARGE THIS LIMIT. YOU AGREE THAT OUR SUPPLIERS WILL HAVE NO LIABILITY OF ANY KIND ARISING FROM OR RELATING TO THIS AGREEMENT.
            </p>
            <p>
                THE COMPANY’S SERVICES MAY BE USED BY YOU TO MONITOR, REQUEST AND SCHEDULE HAULING SERVICES WITH THIRD PARTY PROVIDERS, BUT YOU AGREE THAT THE COMPANY HAS NO RESPONSIBILITY OR LIABILITY TO YOU RELATED TO ANY SERVICES PROVIDED TO YOU BY THIRD PARTY PROVIDERS OTHER THAN AS EXPRESSLY SET FORTH IN THESE TERMS.
            </p>
            <p>
                THESE LIMITATIONS APPLY WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF ALLIANCE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, THE LIABILITY OF ALLIANCE IN SUCH JURISDICTIONS SHALL BE LIMITED TO THE EXTENT PERMITTED BY LAW.
            </p>

            <h3>13. Term and Termination</h3>
            <p>
                Subject to this Section, this Agreement will remain in full force and effect while you use the Services. We may (a) suspend your rights to use the Site and/or Services (including Your Account) or (b) terminate this Agreement, at any time for any reason at our sole discretion, including but not limited to, any use of the Services in violation of this Agreement or our discontinuance of any Services. Upon termination of this Agreement, Your Account and right to access and use the Services will terminate immediately. You understand that any termination of Your Account involves deletion of your User Content associated therewith from our live databases. We will not have any liability whatsoever to you for any termination of this Agreement, including for termination of Your Account or deletion of your User Content. Upon termination of this Agreement, all of the provisions will terminate except those that by their nature should survive.
            </p>

            <h3>14. COPYRIGHT POLICY</h3>
            <p>
                If you are a copyright owner or an agent thereof and believe that any User Content or other content infringes upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act (“DMCA“) by providing our Copyright Agent with the following information in writing (see 17 U.S.C. 512(c)(3) for further detail): (1) A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright that has been allegedly infringed; (2)Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site; (3)Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled and information reasonably sufficient to permit the service provider to locate the material; (4)Information reasonably sufficient to permit the service provider to contact you, such as an address, telephone number, and, if available, an electronic mail; (5)A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and (6)A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
            </p>
            <p>
                Once Proper Bona Fide Infringement Notification is received by the Designated Agent: It is Company’s policy: (1) to remove or disable access to the infringing material; (2) to notify the content provider, member or user that it has removed or disabled access to the material; and (3) that repeat offenders will have the infringing material removed from the system and that Company will terminate such content provider’s, member’s or user’s access to the Service.
            </p>
            <p>
                Counter-Notice. If you believe that your User Content that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner’s agent, or pursuant to the law, to post and use the material in your User Content, you may send a counter-notice containing the following information to the Copyright Agent: (1)Your physical or electronic signature; (2)Identification of the User Content that has been removed or to which access has been disabled and the location at which the User Content appeared before it was removed or disabled; (3)A statement that you have a good faith belief that the User Content was removed or disabled as a result of mistake or a misidentification of the User Content; and (4)Your name, address, telephone number, and, if available, email address, and a statement that you consent to the jurisdiction of the Federal Court for the judicial district in which your address is located, or, if your address is located outside the United States, for the jurisdiction of the federal court in San Francisco, California, and that you will accept service of process from the person who provided notification of the alleged infringement.
            </p>
            <p>
                The Company’s designated Copyright Agent to receive notifications of claimed infringement is {Paths.email}.
            </p>
            <p>
                You acknowledge that if you fail to comply with all of the requirements of this Section 10, your DMCA notice may not be valid.
            </p>

            <h3>15. GENERAL</h3>
            <p>
                Changes to Agreement. This Agreement is subject to occasional revision, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us (if any) and/or by prominently posting notice of the changes on our Site. Any changes to this Agreement will be effective upon the earlier of thirty (30) calendar days following our dispatch of an e-mail notice to you (if applicable) or thirty (30) calendar days following our posting of notice of the changes on our Site. These changes will be effective immediately for new users of our Services. You are responsible for providing us with your most current e-mail address. In the event that the last e-mail address that you have provided us is not valid, or for any reason is not capable of delivering to you the notice described above, our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice. Continued use of our Site or Services following notice of such changes will indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes.
            </p>
            <p>
                Arbitration Agreement And Jury Trial Waiver, Class Action Waiver, And Forum Selection Clause.
            </p>
            <p>
                Any and all controversies, disputes, demands, counts, claims, or causes of action (including the interpretation and scope of this clause, and the arbitrability of the controversy, dispute, demand, count, claim, or cause of action) between you and us or our employees, agents, successors, or assigns, will exclusively be settled through binding and confidential arbitration.
            </p>
            <p>
                Arbitration will be subject to the Federal Arbitration Act and not any state arbitration law. The arbitration will be conducted before one commercial arbitrator with substantial experience in resolving commercial contract disputes from the American Arbitration Association (“AAA”). As modified by this Agreement, and unless otherwise agreed upon by the parties in writing, the arbitration will be governed by the AAA’s Commercial Arbitration Rules and, if the arbitrator deems them applicable, the Supplementary Procedures for Consumer Related Disputes (collectively “Rules and Procedures”).
            </p>
            <p>
                You are thus GIVING UP YOUR RIGHT TO GO TO COURT to assert or defend your rights EXCEPT for matters that may be taken to small claims court. Your rights will be determined by a NEUTRAL ARBITRATOR and NOT a judge or jury. You are entitled to a FAIR HEARING, BUT the arbitration procedures are SIMPLER AND MORE LIMITED THAN RULES APPLICABLE IN COURT. Arbitrator decisions are as enforceable as any court order and are subject to VERY LIMITED REVIEW BY A COURT.
            </p>
            <p>
                You and we must abide by the following rules: (a) ANY CLAIMS BROUGHT BY YOU OR US MUST BE BROUGHT IN THE PARTIES’ INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING; (b) THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON’S CLAIMS, MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A REPRESENTATIVE OR CLASS PROCEEDING, AND MAY NOT AWARD CLASS-WIDE RELIEF, (c) in the event that you are able to demonstrate that the costs of arbitration will be prohibitive as compared to costs of litigation, we will pay as much of your filing and hearing fees in connection with the arbitration as the arbitrator deems necessary to prevent the arbitration from being cost-prohibitive as compared to the cost of litigation, (d) we also reserve the right in our sole and exclusive discretion to assume responsibility for all of the costs of the arbitration; (e) the arbitrator will honor claims of privilege and privacy recognized at law; (f) the arbitration will be confidential, and neither you nor we may disclose the existence, content or results of any arbitration, except as may be required by law or for purposes of enforcement of the arbitration award; (g) the arbitrator may award any individual relief or individual remedies that are permitted by applicable law; and (h) each side pays its own attorneys’ fees and expenses unless there is a statutory provision that requires the prevailing party to be paid its fees and litigation expenses, and then in such instance, the fees and costs awarded will be determined by the applicable law. Notwithstanding the foregoing, either you or we may bring an individual action in small claims court. Further, claims of defamation, violation of the Computer Fraud and Abuse Act, and infringement or misappropriation of the other party’s patent, copyright, trademark, or trade secret will not be subject to this arbitration agreement. Such claims will be exclusively brought in the state or federal courts located in New Jersey. Additionally, notwithstanding this agreement to arbitrate, either party may seek emergency equitable relief before the state or federal courts located in New Jersey in order to maintain the status quo pending arbitration, and hereby agrees to submit to the exclusive personal jurisdiction of the courts located within New Jersey for such purpose. A request for interim measures will not be deemed a waiver of the right to arbitrate.
            </p>
            <p>
                With the exception of subparts (a) and (b) in the paragraph above (prohibiting arbitration on a class or collective basis), if any part of this arbitration provision is deemed to be invalid, unenforceable or illegal, or otherwise conflicts with the Rules and Procedures, then the balance of this arbitration provision will remain in effect and will be construed in accordance with its terms as if the invalid, unenforceable, illegal or conflicting provision were not contained herein. If, however, either subpart (a) or (b) is found to be invalid, unenforceable or illegal, then the entirety of this arbitration provision will be null and void, and neither you nor we will be entitled to arbitration. If for any reason a claim proceeds in court rather than in arbitration, the dispute will be exclusively brought in state or federal court in New Jersey.
            </p>
            <p>
                For more information on AAA, its Rules and Procedures, and how to file an arbitration claim, you may call AAA at 800-778-7879 or visit the AAA website at https://www.adr.org.
            </p>
            <p>
                Choice of Law. This Agreement is made under and will be governed by and construed in accordance with the laws of the State of New Jersey, consistent with the Federal Arbitration Act, without giving effect to any principles that provide for the application of the law of another jurisdiction.
            </p>
            <p>
                Entire Agreement. This Agreement constitutes the entire agreement between you and us regarding the use of the Services. Our failure to exercise or enforce any right or provision of this Agreement will not operate as a waiver of such right or provision. The section titles in this Agreement are for convenience only and have no legal or contractual effect. The word including means including without limitation. If any provision of this Agreement is, for any reason, held to be invalid or unenforceable, the other provisions of this Agreement will be unimpaired and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law. Your relationship to us is that of an independent contractor, and neither party is an agent or partner of the other. This Agreement, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or otherwise transferred by you without our prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void. The terms of this Agreement will be binding upon assignees. No agency, partnership, joint venture, or employment is created as a result of the Terms of Use or your use of any part of the Services. You do not have any authority whatsoever to bind the Company in any respect. All Third Party Providers are independent contractors. Neither the Company nor any users of the Services may direct or control the day-to-day activities of the other, or create or assume any obligation on behalf of the other.
            </p>

            <div>
                <b>LAST UPDATED</b>: Jun 03, 2020
            </div>

        </Layout>
    );
};

export default TermsOfService;