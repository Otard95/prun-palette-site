import type { Component } from 'solid-js'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph';

const Privacy: Component = () => {
  return (
    <div>
      <Heading.h2>Introduction</Heading.h2>
      <Paragraph>
        This Privacy Policy explains how the PrUn Palette, a browser extension
        for Prosperous Universe, handles your data. The extension is designed
        with privacy in mind and does not collect, use, or store any personal
        data.
      </Paragraph>

      <br />

      <Heading.h2>Information Collection</Heading.h2>
      <Paragraph>
        PrUn Palette does not collect or store any personal information. The
        extension does use some information from the game to improve your
        experience, such as your ship names. However, this information never
        leaves your computer and is not stored or used for any other purpose.
      </Paragraph>

      <br />

      <Heading.h2>Third-Party Interactions</Heading.h2>
      <Paragraph>
        The extension communicates with another server to gather some
        non-personal, game-related information. This is done in a way that does
        not share any of your personal information, and it is solely to enhance
        gameplay.
      </Paragraph>

      <br />

      <Heading.h2>Data Security</Heading.h2>
      <Paragraph>
        Since PrUn Palette does not collect or store any personal data, there
        is no risk of your personal information being compromised. All
        information related to your gameplay stays on your computer.
      </Paragraph>

      <br />

      <Heading.h2>User Rights</Heading.h2>
      <Paragraph>
        As PrUn Palette does not collect, use, or store any personal data,
        there are no personal user rights to address in this policy.
      </Paragraph>

      <br />

      <Heading.h2>Policy Changes</Heading.h2>
      <Paragraph>
        This Privacy Policy may be updated occasionally. Any changes will be
        posted on this page. Users are encouraged to check this page
        periodically to stay informed about any changes.
      </Paragraph>

      <br />

      <Heading.h2>Contact Information</Heading.h2>
      <Paragraph>
        If you have any questions about this Privacy Policy, please post a
        discussion or issue on GitHub.
      </Paragraph>
    </div>
  );
}

export default Privacy
