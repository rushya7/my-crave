import React from "react";
import { useForm } from "react-hook-form";
import "./LeadNDA.css";

function LeadNDA() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="nda-form-container">
      <h2 className="title">Non-Disclosure Agreement (NDA)</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-grid">
          <div>
            <label>Email</label>
            <input {...register("email", { required: true })} type="email" />
            {errors.email && <p>Email is required</p>}
          </div>

          <div>
            <label>First Name</label>
            <input {...register("firstName", { required: true })} type="text" />
            {errors.firstName && <p>First name is required</p>}
          </div>

          <div>
            <label>Middle Name</label>
            <input {...register("middleName")} type="text" />
          </div>

          <div>
            <label>Last Name</label>
            <input {...register("lastName", { required: true })} type="text" />
            {errors.lastName && <p>Last name is required</p>}
          </div>

          <div>
            <label>Road</label>
            <input {...register("road", { required: true })} type="text" />
          </div>

          <div>
            <label>City</label>
            <input {...register("city", { required: true })} type="text" />
          </div>

          <div>
            <label>State</label>
            <input {...register("state", { required: true })} type="text" />
          </div>

          <div>
            <label>Country</label>
            <input {...register("country", { required: true })} type="text" />
          </div>

          <div>
            <label>Pincode</label>
            <input {...register("pincode", { required: true })} type="text" />
          </div>
        </div>

        <div className="terms-section">
          <h3>Agreement Terms</h3>
          <div className="terms-box">
            <p>and MYCrave Consultancy & Services MH with and address 103, 1st Floor, Sheth Plaza, Oppo. Market Yard Road, Bapat Mala, Nishant Colony, Sangli 416416 (the “Recipient” or the “Receiving Party”).

The Recipient hereto desires to participate in discussions regarding Patent Filing content .

(the “Transaction”). During these discussions, Disclosing Party may share certain proprietary information with the Recipient. Therefore, in consideration of the mutual promises and covenants contained in this Agreement, and other good and valuable consideration, the receipt and sufficiency of which is hereby acknowledged, the parties hereto agree as follows:</p>

            <p><strong>1. Definition of Confidential Information:</strong> (a) For purposes of this Agreement, “Confidential Information” means any data or information that is proprietary to the Disclosing Party and not generally known to the public, whether intangible or intangible form, whenever and however disclosed, including, but not limited to: (i) any marketing strategies, plans, financial information, or projections, operations, sales estimates, business plans and performance results relating to the past, present or future business activities of such party, its affiliates, subsidiaries and affiliated companies; (ii) plans for products or services, and customer or supplier lists; (iii) any scientific or technical information, invention, design, process, procedure, formula, improvement, technology or method; (iv) any concepts, reports, data, know-how, works-in-progress,<br /><br />designs, development tools, specifications, computer software, source code, object code, flow charts, databases, inventions, information and trade secrets; and (v) any other information that should reasonably be recognized as confidential information of the Disclosing Party. Confidential Information need not be novel, unique, patentable, copyrightable or constitute a trade secret in order to be designated Confidential Information. The Receiving Party acknowledges that the Confidential Information is proprietary to the Disclosing Party, has been developed and obtained through great efforts by the Disclosing Party and that Disclosing Party regards all of its Confidential Information as trade secrets(b) Notwithstanding anything in the foregoing to the contrary, Confidential Information shall not include information which: (i) was known by the Receiving Party prior to receiving the Confidential Information from the Disclosing Party; (b) becomes rightfully known to the Receiving Party from a third-party source not known (after diligent inquiry) by the Receiving Party to be under an obligation to Disclosing Party to maintain confidentiality; (c) is or becomes publicly available through no-fault of or failure to act by the Receiving Party in breach of this Agreement; (d) is required to be disclosed in a judicial or administrative proceeding, or is otherwise requested or required to be disclosed by law or regulation, although the requirements of paragraph 4 hereof shall apply prior to any disclosure being made; and (e) is or has been independently developed by employees, consultants or agents of the Receiving Party without violation of the terms of this Agreement or reference or access to any Confidential Information.</p>

            <p><strong>2. Disclosure of Confidential Information:</strong>From time to time, the Disclosing Party may disclose Confidential Information to the Receiving Party. The Receiving Party will: (a) limit disclosure of any Confidential Information to its directors, officers, employees, agents or representatives (collectively “Representatives”) who have a need to know such Confidential Information in connection with the current or contemplated business relationship between the parties to which this Agreement relates, and only for that purpose; (b) advise its Representatives of the proprietary nature of the Confidential Information and of the obligations set forth 2in this Agreement and require such Representatives to keep the Confidential Information confidential; (c)shall keep all Confidential Information strictly confidential by using a reasonable degree of care, but not less than the degree of care used by it in safeguarding its own confidential information; and (d) not disclose any Confidential Information received by it to any third parties (except as otherwise provided for herein).Each party shall be responsible for any breach of this Agreement by any of their respective Representatives.</p>

            <p><strong>3.  Use of Confidential Information:</strong>The Receiving Party agrees to use the Confidential Information solely in connection with the current or contemplated business relationship between the parties and not for any purpose other than as authorized by this Agreement without the prior written consent of an authorized representative of the Disclosing Party. No other right or license, whether expressed or implied, in the Confidential Information is granted to the Receiving Party hereunder. Title to the Confidential Information will remain solely in the Disclosing Party. All use of Confidential Information by the Receiving Party shall be for the benefit of the Disclosing Party and any modifications and improvements thereof by the Receiving Party shall be the sole property of the Disclosing Party. Nothing contained herein is intended to modify the parties’ existing agreement that their discussions in furtherance of a potential business relationship are governed by Federal Rule of Evidence 408.</p>

            <p><strong>4.  Compelled Disclosure of Confidential Information:</strong>Notwithstanding anything in the foregoing to the contrary, the Receiving Party may disclose Confidential Information pursuant to any governmental, judicial, or administrative order, subpoena, discovery request, regulatory request or similar method, provided that the Receiving Party promptly notifies, to the extent practicable, the Disclosing Party in writing of such demand for disclosures that the Disclosing Party, at its sole expense, may seek to make such disclosure subject to a protective order or other appropriate remedy to preserve the confidentiality of the Confidential Information; provided in the case of a broad regulatory request with respect to the Receiving Party’s business (not targeted at Disclosing Party), the Receiving Party may promptly comply with such request provided the Receiving Party give (if permitted by such regulator) the Disclosing Party prompts notice of such disclosure. The Receiving Party agrees that it shall not oppose and shall cooperate with efforts by, to the extent practicable, the Disclosing Party with respect to any such request for a protective order or other relief. Notwithstanding the foregoing, if the Disclosing Party is unable to obtain or does not seek a protective order and the Receiving Party is legally requested or required to disclose such Confidential Information, disclosure of such Confidential Information may be made without liability.</p>

            <p><strong>5. Term:</strong>This Agreement shall remain in effect for a two-year term (subject to a one year extension if the parties are still discussing and considering the Transaction at the end of the second year).Notwithstanding the foregoing, the parties’ duty to hold in confidence Confidential Information that was disclosed during term shall remain in effect indefinitely.</p>

            <p><strong>6. Remedies:</strong>Both parties acknowledge that the Confidential Information to be disclosed hereunder is of a unique and valuable character, and that the unauthorized dissemination of the Confidential Information would destroy or diminish the value of such information. The damages to Disclosing Party that would result from the unauthorized dissemination of the Confidential Information would be impossible to calculate. Therefore, both parties hereby agree that the Disclosing Party shall be entitled to injunctive relief preventing the dissemination of any Confidential Information in violation of the terms hereof. Such injunctive relief shall be in addition to any other remedies available hereunder, whether at law or in equity. Disclosing Party shall be entitled to recover its costs and fees, including reasonable attorneys’ fees, incurred in obtaining any such relief. Further, in the event of litigation relating to this Agreement, the prevailing party shall be entitled to recover its reasonable attorney’s fees and expenses.</p>

            <p><strong>7.Return of Confidential Information:</strong>Receiving Party shall immediately return and redeliver to the other all tangible material embodying the Confidential Information provided hereunder and all notes, summaries, memoranda, drawings, manuals, records, excerpts or derivative information deriving there from and all other documents or materials (“Notes”) (and all copies of any of the foregoing, including “copies” that have been converted to computerized media in the form of image, data or word processing files either manually or by image capture) based on or including any Confidential Information, in whatever form of storage or retrieval, upon the earlier of (i) the completion or termination of the dealings between the parties contemplated hereunder; (ii) the termination of this Agreement; or (iii) at such time as the Disclosing Party may so request; provided however that the Receiving Party may retain such of its documents as is necessary to enable it to comply with its document retention policies. Alternatively, the Receiving Party, with the written consent of the Disclosing Party may (or in the case of Notes, at the Receiving Party’s <br /> <br />option) immediately destroy any of the foregoing embodying Confidential Information (or the reasonably no recoverable data erasure of computerized data) and, upon request, certify in writing such destruction by an authorized officer of the Receiving Party supervising the destruction).</p>

            <p><strong>8. Notice of Breach:</strong>Receiving Party shall notify the Disclosing Party immediately upon discovery of any unauthorized use or disclosure of Confidential Information by Receiving Party or its Representatives, or any other breach of this Agreement by Receiving Party or its Representatives, and will cooperate with efforts by the Disclosing Party to help the Disclosing Party regain possession of Confidential Information and prevent its further unauthorized use.</p>

            <p><strong>9. No Binding Agreement for Transaction:</strong>The parties agree that neither party will be under any legal obligation of any kind whatsoever with respect to a Transaction by virtue of this Agreement, except for the matters specifically agreed to herein. The parties further acknowledge and agree that they each reserve the right, in their sole and absolute discretion, to reject any and all proposals and to terminate discussions and negotiations with respect to a Transaction at any time. This Agreement does not create a joint venture or partnership between the parties. If a Transaction goes forward, the non-disclosure provisions of any applicable transaction documents entered into between the parties (or their respective affiliates) for the Transaction shall supersede this Agreement. In the event such provision is not provided for in said transaction documents, this Agreement shall control.</p>

            <p><strong>10. Warranty. 4:</strong> Each party warrants that it has the right to make the disclosures under this Agreement. <br /> <br /> NO WARRANTIES ARE MADE BY EITHER PARTY UNDER THIS AGREEMENT <br /> <br /> WHATSOEVER. The parties acknowledge that although they shall each endeavor to include in the Confidential Information all information that they each believe relevant for the purpose of the evaluation of a Transaction, the parties understand that no representation or warranty as to the accuracy or completeness of the Confidential Information is being made by either party as the Disclosing Party. Further, neither party is under any obligation under this Agreement to disclose any Confidential <br /> <br /> Information it chooses not to disclose. Neither Party hereto shall have any liability to the other party nor to the other party’s Representatives resulting from any use of the Confidential Information except with respect to disclosure of such Confidential Information in violation of this Agreement.</p>

            <p><strong>11. Miscellaneous:</strong> (a) This Agreement constitutes the entire understanding between the parties and supersedes any and all prior or contemporaneous understandings and agreements, whether oral or written, between the parties, with respect to the subject matter hereof. This Agreement can only be modified by a written amendment signed by the party against whom enforcement of such modification is sought. <br /> <br /> (b) Any failure by either party to enforce the other party’s strict performance of any provision of this Agreement will not constitute a waiver of its right to subsequently enforce such provision or any other provision of this Agreement. <br /> <br /> (c) Although the restrictions contained in this Agreement are considered by the parties to be reasonable for the purpose of protecting the Confidential Information, if any such restriction is found by a court of competent jurisdiction to be unenforceable, such provision will be modified, rewritten or interpreted to include as much of its nature and scope as will render it enforceable. If it cannot be so modified, rewritten or interpreted to be enforceable in any respect, it will not be given effect, and the remainder of the Agreement will be enforced as if such provision was not included. <br /> <br /> (d) Any notices or communications required or permitted to be given hereunder may <br /> <br /> be delivered by hand, deposited with a nationally recognized overnight carrier, electronic-mail, or mailed by certified mail, return receipt requested, postage prepaid, in each case, to the address of the other party first indicated above (or such other addressee as may be furnished by a party in accordance with this paragraph). All such notices or communications shall be deemed to have been given and received (a) in the case of personal delivery or electronic-mail, on the date of such delivery, (b) in the case of delivery by a nationally recognized overnight carrier, on the third business day following dispatch and (c) in the case of mailing, on the seventh business day following such mailing. <br /> <br /> (e) This Agreement is personal in nature, and neither party may directly or indirectly assign or transfer it by operation of law or otherwise without the prior written consent of the other party, which consent will not be unreasonably withheld. All obligations contained in this Agreement shall extend to and be binding upon the parties to this Agreement and their respective successors, assigns and designees.5 <br /> <br />(f) The receipt of Confidential Information pursuant to this Agreement will not prevent or in any way limit either party from: (i) developing, making or marketing products or services that are or may be competitive with the products or services of the other; or (ii) providing products or services to others who compete with the other. <br /> <br /> (g) Paragraph headings used in this Agreement are for reference only and shall not be used or relied upon in the interpretation of this Agreement.

</p>

            <p><strong>Authorized Signatory – MYCrave Consultancy & Services MH</strong><br />Kishor Shendge<br />(Vice President – Patent Analyst & Commercialization)<br />Place: Sangli</p>
          </div>

          <label className="checkbox">
            <input type="checkbox" {...register("agree", { required: true })} />
            I agree to the terms and conditions outlined in the NDA.
          </label>
          {errors.agree && <p>You must agree to continue.</p>}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default LeadNDA;