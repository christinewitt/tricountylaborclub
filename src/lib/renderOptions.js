import { BLOCKS, INLINES } from '@contentful/rich-text-types';

// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked block entries e.g. code blocks)
// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

const renderOptions = {
  renderNode: {
    // [INLINES.EMBEDDED_ENTRY]: function (node, children) {
    //   if (node.data.target.sys.contentType.sys.id === 'news') {
    //     return `<a href="/blog/${node.data.target.fields.slug}">${node.data.target.fields.title}</a>`;
    //   }
    // },
    // [BLOCKS.EMBEDDED_ENTRY]: function (node, children) {
    //   if (node.data.target.sys.contentType.sys.id === 'codeBlock') {
    //     return `<pre><code>${node.data.target.fields.code}</code></pre>`;
    //   }

    //   if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
    //     return `<iframe src="${node.data.target.fields.embedUrl}" height="100%" width="100%" frameborder="0" scrolling="no" title="${node.data.target.fields.title}" allowfullscreen="true"></iframe>`;
    //   }
    // },
    [BLOCKS.EMBEDDED_ASSET]: function (node, children) {
      if (node.data.target.fields.file.contentType === 'application/pdf') {
        return `<a href="https://${node.data.target.fields.file.url}" target="_blank" rel="noopener noreferrer">${node.data.target.fields.title}</a>`;
      }

      return `<img src="https://${node.data.target.fields.file.url}" height="${node.data.target.fields.file.details.image.height}" width="${node.data.target.fields.file.details.image.width}" alt="${node.data.target.fields.description}"
      title="${node.data.target.fields.description}" class="post-image">`;
    },
    [INLINES.ASSET_HYPERLINK]: function (node, children) {
      if (node.data.target.fields.file.contentType === 'application/pdf') {
        return `<a href="https://${node.data.target.fields.file.url}" target="_blank" rel="noopener noreferrer">${node.data.target.fields.title}</a>`;
      }
    },
  },
};

export default renderOptions;
