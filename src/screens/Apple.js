import React from 'react'

export default function Apple() {
    return (
        <div class="accordion" id="accordionExample">


            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Enrolling in the Apple Developer Program as an organization
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <span>
                            If you're an employee at a company, nonprofit organization, joint venture, partnership, or government organization, follow these steps to enroll in the Apple Developer Program on your iPhone or iPad. Note that as the person enrolling your organization in the Apple Developer Program, you must have the legal authority to bind your organization to legal agreements. You must be the organization’s owner/founder, executive team member, senior project lead, or an employee with legal authority granted to you by a senior employee. Before you begin, you’ll need:
                        </span>
                        <ul>
                            <li>An iPhone or an iPad with Touch ID, Face ID, or a passcode enabled. You must use the same device for the entire enrollment process.</li>
                            <li>An Apple ID with two-factor authentication turned on. Your Apple ID information must be valid and up to date — including, but not limited to, your first name (given name), last name (family name), address, phone number, trusted phone number, and trusted devices.</li>
                            <li>The latest version of the Apple Developer app installed on your device.</li>
                            <li>To sign in to iCloud on your device.</li>
                        </ul>
                    </div>
                </div>
            </div>




            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Start enrollment
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ol>
                            <li>Launch the Apple Developer app on the device you want to use for enrollment.</li>
                            <li>Tap the Account tab.</li>
                            <li>Sign in with your Apple ID. This can be different than the Apple ID signed in to your device, but must have two-factor authentication turned on.</li>
                            <li>If prompted, review the Apple Developer Agreement and tap Agree.</li>
                            <li>Tap Enroll Now.</li>
                            <li>Review the program benefits and requirements and tap Continue.</li>
                        </ol>
                    </div>
                </div>
            </div>




            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Enter your information as the Account Holder
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ol>
                            <li>If requested, enter your legal first name, legal last name, and phone number. Do not enter an alias, nickname, or company name as your legal name, as doing so will cause a delay in the completion of your enrollment review.</li>
                            <li>You'll be asked to verify your identity using your driver's license or government-issued photo ID
                                <ul>
                                    <li>Capture the front of your photo ID and tap Confirm.</li>
                                    <li>Capture the back of your photo ID and tap Confirm.</li>
                                    <li>Review the information you submitted and tap Continue Enrollment.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>




            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Enter your organization’s information
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <span>Follow the steps on the next few screens to provide the following information:</span>
                        <ul>
                            <li>Entity type.</li>
                            <li>Legal entity name. We do not accept DBAs, fictitious businesses, trade names, or branches. The legal entity name will appear as the “seller” for apps you distribute. Example: Seller: ABC Company, Inc.</li>
                            <li>D-U-N-S® Number. Your organization must have a D-U-N-S Number so that we can verify its identity and legal entity status. These unique nine-digit numbers are assigned by Dun & Bradstreet and are widely used as standard business identifiers. You can look yours up and request one for free.</li>
                            <li>Headquarters address and phone number.</li>
                            <li>Website. Your organization's website must be publicly available and the domain name must be associated with your organization.</li>
                            <li>Signing authority confirmation. Confirm that you have the authority to bind your organization to legal agreements and provide the contact information of an employee who can verify your signature authority.</li>
                            <li>Optionally, if your organization is a nonprofit, educational, or government organization, you can request a fee waiver.</li>
                        </ul>
                        <span>After you've submitted your information, it will be reviewed by Apple. You'll then receive an email with next steps.</span>
                    </div>
                </div>
            </div>



            
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Complete enrollment and purchase
                    </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <span>Once your enrollment information has been verified and approved, you’ll receive an email letting you know that you can complete your enrollment.</span>
                        <ol>
                            <li>Launch the Apple Developer app on the device you used for enrollment.</li>
                            <li>Tap the Account tab.</li>
                            <li>Sign in with the Apple ID you used for enrollment.</li>
                            <li>Tap Continue Your Enrollment.</li>
                            <li>Review the terms of the Apple Developer Program License Agreement and tap Agree.</li>
                            <li>Review your annual membership subscription details and tap the Subscribe button.</li>
                        </ol>
                        <span>Membership is provided on an annual basis as an auto-renewable subscription that renews until cancelled. You can make your purchase using one of your Apple ID payment methods.3 If you need to use your organization’s credit card, add it to the Apple ID that’s signed in to your device’s settings. This can be a different Apple ID than the one you use to enroll. A receipt will be emailed to you, and you can resend the receipt to yourself via email at any time from Purchase History in Settings. You can cancel your subscription in Settings up to one day before your annual renewal date. Membership fees paid for the year during which you cancel are nonrefundable.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
