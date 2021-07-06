import './MasonryComponent.css';


function Tiles() {
    return (
        <div className="website">
            <div className="header">
                <div className="logo"> </div>
            </div>
            <div className="grid">
                <div className="item">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item">4</div>
                <div className="item">5</div>
                <div className="item">6</div>
            </div>
        </div>
    );
}
// Masonry Grid
(".grid").masonry({
    itemSelector: ".item",
    columnWidth: 160,
    gutter: 10
});

(".item").each(function (i) {
    setTimeout(function () {
        (".item").eq(i).addClass("is-visible");
    }, 200 * i);
});

export default Tiles;



