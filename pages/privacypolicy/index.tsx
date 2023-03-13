import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Title = styled.h2<{ mb?: number }>((props) => {
  const { mb = 20 } = props;

  return css`
    max-width: 800px;
    margin: 0 auto ${mb}px;
    text-align: center;
  `;
});

export const P = styled.p<{ mb?: number }>((props) => {
  const { mb = 20 } = props;

  return css`
    max-width: 800px;
    margin: 0 auto ${mb}px;
    text-align: center;
  `;
});

const PrivacypolicyPage = () => {
  return (
    <>
      <Title>Privacy Policy</Title>
      <P mb={20}>
        Erwin Group built the Nftea app as a Free app. This SERVICE is provided
        by Erwin Group at no cost and is intended for use as is.
      </P>
      <P mb={20}>
        This page is used to inform visitors regarding our policies with the
        collection, use, and disclosure of Personal Information if anyone
        decided to use our Service.
      </P>
      <P mb={20}>
        If you choose to use our Service, then you agree to the collection and
        use of information in relation to this policy. The Personal Information
        that we collect is used for providing and improving the Service. We will
        not use or share your information with anyone except as described in
        this Privacy Policy.
      </P>
      <P mb={20}>
        The terms used in this Privacy Policy have the same meanings as in our
        Terms and Conditions, which are accessible at Nftea unless otherwise
        defined in this Privacy Policy.
      </P>
      <Title>Information Collection and Use</Title>

      <P>
        For a better experience, while using our Service, we may require you to
        provide us with certain personally identifiable information. The
        information that we request will be retained by us and used as described
        in this privacy policy.
      </P>
      <P>
        The app does use third-party services that may collect information used
        to identify you.
      </P>
      <P>
        Link to the privacy policy of third-party service providers used by the
        app
      </P>
      <P>
        Google Analytics for Firebase <br /> Log Data
      </P>
      <P>
        We want to inform you that whenever you use our Service, in a case of an
        error in the app we collect data and information (through third-party
        products) on your phone called Log Data. This Log Data may include
        information such as your device Internet Protocol (“IP”) address, device
        name, operating system version, the configuration of the app when
        utilizing our Service, the time and date of your use of the Service, and
        other statistics.
      </P>

      <Title>Cookies</Title>
      <P>
        Cookies are files with a small amount of data that are commonly used as
        anonymous unique identifiers. These are sent to your browser from the
        websites that you visit and are stored on your device's internal memory.
      </P>
      <P>
        This Service does not use these “cookies” explicitly. However, the app
        may use third-party code and libraries that use “cookies” to collect
        information and improve their services. You have the option to either
        accept or refuse these cookies and know when a cookie is being sent to
        your device. If you choose to refuse our cookies, you may not be able to
        use some portions of this Service.
      </P>
      <Title>Service Providers</Title>

      <P>
        We may employ third-party companies and individuals due to the following
        reasons:
      </P>
      <P>To facilitate our Service;</P>
      <P>To provide the Service on our behalf;</P>
      <P>To perform Service-related services; or</P>
      <P>To assist us in analyzing how our Service is used.</P>
      <P>
        We want to inform users of this Service that these third parties have
        access to their Personal Information. The reason is to perform the tasks
        assigned to them on our behalf. However, they are obligated not to
        disclose or use the information for any other purpose.
      </P>

      <Title>Security</Title>
      <P>
        We value your trust in providing us your Personal Information, thus we
        are striving to use commercially acceptable means of protecting it. But
        remember that no method of transmission over the internet, or method of
        electronic storage is 100% secure and reliable, and we cannot guarantee
        its absolute security.
      </P>

      <Title>Links to Other Sites</Title>
      <P>
        This Service may contain links to other sites. If you click on a
        third-party link, you will be directed to that site. Note that these
        external sites are not operated by us. Therefore, we strongly advise you
        to review the Privacy Policy of these websites. We have no control over
        and assume no responsibility for the content, privacy policies, or
        practices of any third-party sites or services.
      </P>

      <Title>Children’s Privacy</Title>
      <P>
        These Services do not address anyone under the age of 13. We do not
        knowingly collect personally identifiable information from children
        under 13 years of age. In the case we discover that a child under 13 has
        provided us with personal information, we immediately delete this from
        our servers. If you are a parent or guardian and you are aware that your
        child has provided us with personal information, please contact us so
        that we will be able to do the necessary actions.
      </P>

      <Title>Changes to This Privacy Policy</Title>
      <P>
        We may update our Privacy Policy from time to time. Thus, you are
        advised to review this page periodically for any changes. We will notify
        you of any changes by posting the new Privacy Policy on this page.
      </P>

      <P>This policy is effective as of 2022-10-17</P>
      <Title>Contact Us</Title>
      <P>
        If you have any questions or suggestions about our Privacy Policy, do
        not hesitate to contact us at an@erwin.group.
      </P>
    </>
  );
};

export default PrivacypolicyPage;
