import React from 'react'

export default function Apple() {
    return (
        <div class="accordion" id="accordionExample">


            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Sign up for a Google Play Developer account
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ol>
                            <li>
                                Using your Google Account,<a href="https://play.google.com/apps/publish/signup">sign up for a Developer account</a>.
                            </li>
                            <li>
                                Once you have a Developer account, you can use Play Console to publish and manage your apps.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>




            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accept the Developer Distribution Agreement
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <span>During the signup process, you'll need to review and accept the Google Play Developer Distribution Agreement.</span>
                    </div>
                </div>
            </div>




            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Pay registration fee
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <span>There is a US$25 one-time registration fee that you can pay with the following credit or debit cards:</span>
                        <ul>
                            <li>MasterCard</li>
                            <li>Visa</li>
                            <li>American Express</li>
                            <li>Discover (the U.S. only)</li>
                            <li>Visa Electron (Outside of the U.S. only)</li>
                        </ul>
                        <span>Note: Prepaid cards are not accepted. The types of cards accepted may vary by location.</span>
                    </div>
                </div>
            </div>




            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Complete your account details
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ol>
                            <li>Select your developer account type.</li>
                            <li>Complete all the fields for your chosen account type.
                                <ul>
                                    <li>For an organization account, you must provide the following information:</li>
                                    <li>Developer name, which is displayed to customers on Google Play</li>
                                    <li>Organization name</li>
                                    <li>Organization address</li>
                                    <li>Organization phone number, which must be verified </li>
                                    <li>Organization website</li>
                                    <li>Contact name</li>
                                    <li>Contact email address, which must be verified <br/>
                                    Tip: We will use this to contact you about your account. We recommend using an email address associated with your organization, not a personal email address. For more tips, we included contact information best practices in our Help Center.
                                    </li>
                                    <li>Contact phone number in international format</li>
                                </ul>
                            </li>
                            <li>Accept the Terms.</li>
                            <li>Create your account.</li>
                            <li>Learn how to verify your contact details.</li>
                        </ol>
                        <span> You can add more account information after you've created your account.</span><br/>
                        <span>Note: To process your request for a Play Developer account you may be asked for a valid government ID and a credit card, both under your legal name. If this information is determined to be invalid, your registration fee will not be refunded.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
