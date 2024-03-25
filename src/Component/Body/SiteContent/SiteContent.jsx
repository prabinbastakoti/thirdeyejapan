import HeadingTitle from '../../HeadingTitle';
import SingleContent from '../SiteContent/SingleContent';

const SiteContent = ({ data }) => {
  let content = data.contents.filter(
    (item) => item.pageLocation === 'site content'
  );

  return (
    <>
      <div>
        <HeadingTitle title="site content" />
        <div className="grid grid-cols-1 md:grid-cols-3 mt-14 gap-14">
          {content.map((content, index) => {
            return (
              <div key={index}>
                <SingleContent index={index} content={content} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SiteContent;
