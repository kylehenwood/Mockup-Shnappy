export function StudioWatermark() {
  return (
    <div className="module">
      <div className="module__header">
        <h4 className="heading-style">Watermark</h4>
      </div>
      <div className="module__body" style={{ padding: '2.4rem' }}>
        <div className="typography">
          <p>Once setup, you will have the option to automatically watermark any image you upload.</p>
          <p>You don't currently have a watermark setup. <a href="#">Upload one now</a>.</p>
          <h4>Need more help?</h4>
          <p>We wrote this <a href="#">blog post</a> on creating a watermark image for Shnappy.</p>
          <h4>Need even more help?</h4>
          <p>To add your watermark to Shnappy, simply save your image as <code>watermark.png</code> and place it inside your "watermark" folder in your Dropbox account.</p>
        </div>
      </div>
      <footer className="module__footer">
        <div className="button-pattern clearfix">
          <div className="button-pattern__submit">
            <button className="button button--36 button--pink">Save changes</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
