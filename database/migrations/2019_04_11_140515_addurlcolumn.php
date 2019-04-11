<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Addurlcolumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('memos', function (Blueprint $table) {
            $table->string('featureimage')->nullable()->change();
            $table->string('url')->nullable();
        });
        Schema::table('announcements', function (Blueprint $table) {
            $table->string('featureimage')->nullable()->change();
            $table->string('url')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('memos', function (Blueprint $table) {
            $table->dropColumn('featureimage');
            $table->dropColumn('url');
        });
        Schema::table('announcements', function (Blueprint $table) {
            $table->dropColumn('featureimage');
            $table->dropColumn('url');
        });
    }
}
