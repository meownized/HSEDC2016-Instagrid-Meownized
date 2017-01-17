<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
    <script src="javascripts/jquery.mousewheel.js" charset="utf-8" type="text/javascript"></script>
    <script type="text/javascript">
    $(function() {

     $("gallery").mousewheel(function(event, delta) {

        this.scrollLeft -= (delta * 30);

        event.preventDefault();

     });

    });
    </script>
