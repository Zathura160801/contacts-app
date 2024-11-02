export default function ContactItemImage({ imageUrl }) {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="contact avatar" />
    </div>
  );
}
