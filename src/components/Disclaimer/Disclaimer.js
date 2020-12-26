import React from 'react';
import Button from "../../components/CustomButtons/Button.js";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    
}));
const Disclaimer = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <section class="text-gray-700 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">DISCLAIMER</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base" style={{ textAlign: 'justify' }}>
                            Clients following our programs, on average, lose 2-4 kg per month. Restrictions apply. Results may vary from person to person.<br /><br />

                            Please note that Dr Snehal Adsule (Founder & CEO of CurviCare) doesn't handle any client directly. All our Clients are handled by professional & experienced team of Dieticians & counselors which is monitored by Dr. Snehal Adsule.
                            <br /><br />
                            The information contained on this blog, website, and related content (such as Instagram posts) are of a general nature. They are not intended to treat, diagnose, or give specific medical advice. While all content is written by a registered dietitian and strive to provide only accurate, scientific-based information, your specific health needs may or may not apply to the content contained on this website and related content. It is not intended to diagnose or treat any specific medical condition.
                            <br /><br />
                            All content is copyrighted, and must be used only with permission and citation to CurviCare.com.

                            <br /><br />
                            Refund and Cancellation Policies
                            <br /><br />
                            We give complete information regarding our programs to let you make informed decision before purchasing our services. Please clear all your doubts with the counselor before making any payment.
                            <br />
                            If you purchase one of our services, after your payment has cleared your services will be delivered as per schedule / sessions. No refunds will be given after payment is done. During your consultation, our support staff is available to assist answering to your questions. We strongly recommend that all customers clear their doubts about the services.
                            <br /><br />
                            No refund will be made once a purchase is made. Once purchase is made, the service is non-refundable but can be transferable to another person for any remaining amount of services if we feel the reason is genuine.
                            <br /><br />
                            Acceptance of this Refund Policy<br />
                            It is your responsibility to familiarize yourself with this refund policy.
                            <br /><br />
                            By placing an order for any of our services & making payment you indicate that you have read this refund policy and that you agree with and fully accept the terms of this refund policy.
                            <br /><br />
                            If you do not agree with or fully accept the terms of this refund policy, we ask that you do not start with our services.
                            <br /><br />
                            Please contact customer service at support@curvicare.com if you have any questions.
                            <br /><br />

                            Contact Details
                            <br /><br />
                            CURVICARE | Dietician Nutritionist & Weight Loss Center in Mumbai |
                            <br /><br />
                            Address: Ruparel Iris, 16th Floor, Senapati Bapat Marg, Matunga West, Mumbai, Maharashtra 400013
                            <br /><br />
                            Map Address: https://maps.app.goo.gl/oyAri52wKHBLykX46
                            <br /><br />
                            Contact No. 93214 24501
                            <br /><br />
                            Mail ID: hello@curvicare.com
                        </p>
                        <div className='text-center md:mt-8 lg:mt-8'>
                            <Button
                                style={{ backgroundColor: '#D00f7F', fontFamily: 'Open Sans', color: '#FFF' }}
                                className={classes.startbtn}
                                color="danger"
                                size="lg"
                                rel="noopener noreferrer"
                            >
                                <i className="" />
                                <Link to="/" className={classes.dropdownLink}>
                                    Back
                    </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Disclaimer;